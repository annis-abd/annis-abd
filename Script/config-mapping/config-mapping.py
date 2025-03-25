import re
import json
import pandas as pd

def show_error_location(content, error, context=5):
    lines = content.split('\n')
    line_no, col_no = error.lineno, error.colno
    start = max(0, line_no - context - 1)
    end = min(len(lines), line_no + context)

    print(f"Error occurred around line {line_no}:")
    for i, line in enumerate(lines[start:end], start=start+1):
        print(f"{i:4d}: {line}")
        if i == line_no:
            print(" " * (col_no + 5) + "^")
    print(f"\nError message: {error}")

def extract_module_exports(file_path):
    with open(file_path, 'r') as file:
        content = file.read()
    match = re.search(r'module\.exports\s*=\s*({[\s\S]*?});?\s*$', content, re.MULTILINE)
    return match.group(1) if match else None

def remove_comments(string):
    string = re.sub(r'//.*$', '', string, flags=re.MULTILINE)       # Remove single-line comments
    return re.sub(r'/\*[\s\S]*?\*/', '', string)                    # Remove multi-line comments

def clean_js_object(js_string):
    js_string = re.sub(r'\s*\|\|\s*[^,}\n]+', '', js_string)        # Remove default values
    js_string = re.sub(r',(\s*[}\]])', r'\1', js_string)            # Remove trailing commas
    js_string = re.sub(r'(\w+):', r'"\1":', js_string)              # Wrap all keys in double quotes
    js_string = re.sub(r"'([^']*)'", r'"\1"', js_string)            # Replace single quotes with double quotes for string values
    js_string = re.sub(r'process\.env\.(\w+)', r'"\1"', js_string)  # Replace process.env.VARIABLE_NAME with "VARIABLE_NAME"
    if js_string.count('{') > js_string.count('}'):                 # Check and add closing brace if missing
        js_string = js_string.rstrip() + '\n}'
    return js_string

def parse_js_content(file_path):
    js_content = extract_module_exports(file_path)
    if js_content is None:
        raise ValueError("Could not find module.exports in the file.")
    js_content = remove_comments(js_content)
    js_content = clean_js_object(js_content)
    return json.loads(js_content)

def create_new_dict(data):
    return {
        key: {
            sub_key: {'var': sub_value, 'val': ''}
            for sub_key, sub_value in value.items()
            if isinstance(sub_value, str)
        }
        for key, value in data.items()
        if isinstance(value, dict) and 'url' in value
    }

def update_dict_from_conf(new_dict, conf_file):
    with open(conf_file, 'r') as file:
        for line in file:
            if line.startswith('export'):
                var, val = line.strip().split('=', 1)
                var = var.replace('export ', '')
                val = val.strip("'")
                for key in new_dict:
                    for sub_key in new_dict[key]:
                        if new_dict[key][sub_key]['var'] == var:
                            new_dict[key][sub_key]['val'] = val

def create_dataframe(new_dict):
    data = [
        [key, f"{key}.{sub_key}", new_dict[key][sub_key]['var'], new_dict[key][sub_key]['val']]
        for key in new_dict
        for sub_key in new_dict[key]
    ]
    return pd.DataFrame(data, columns=['Object', 'Key', 'Variable', 'Value'])

def create_json_data(new_dict):
    return {
        key: {
            sub_key: {
                'var': new_dict[key][sub_key]['var'],
                'val': new_dict[key][sub_key]['val']
            }
            for sub_key in new_dict[key]
        }
        for key in new_dict
    }

def main():
    try:
        data = parse_js_content('production.js')
        new_dict = create_new_dict(data)
        update_dict_from_conf(new_dict, 'phx-app.conf')

        df = create_dataframe(new_dict)
        df.to_excel('output.xlsx', index=False)
        print("Excel file has been created")

        json_data = create_json_data(new_dict)
        with open('output.json', 'w') as json_file:
            json.dump(json_data, json_file, indent=2)
        print("JSON file has been created")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
