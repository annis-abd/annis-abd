import jwt
from datetime import datetime, timedelta

SECRET_KEY_NORMAL = "phx-inventory-jwt"
SECRET_KEY_MC = "XVdWOmy6gtTsSvdBK1ipsWkGhNE8AzIb8kbtY/xv2A=="
SECRET_KEY_MC_PROD = "jQQ02TbNvNHb+9tkT85bFWlnmS213qKhcmtNSLvDjw=="

TOKEN_TYPE = {
    '1': "Normal",
    '2': "Print sticker",
    '3': "MC",
    '4': "MC Prod"
}
USER_MAP = {
    'u': "UNNCHANC",
    's': "SUREEPPH",
    'a': "ANNISABD"
}


def generate_normal_token(user_id):
    payload = {
        "userId": user_id,
        "locationCode": "1100",
        "group": "admin",
        "subGroup": "admin",
        "iat": int(datetime.now().timestamp()),
        "exp": int((datetime.now() + timedelta(hours=4)).timestamp()),
    }
    return jwt.encode(payload, SECRET_KEY_NORMAL, algorithm="HS256")

def generate_print_sticker_token(user_id):
    production_control_no = input("Enter production control no: ")
    payload = {
        "userId": user_id,
        "locationCode": "1100",
        "group": "admin",
        "srcSystem": "VHLINV",
        "productionControlNo": production_control_no,
        "printQR": "10",
        "iat": int(datetime.now().timestamp()),
        "exp": int((datetime.now() + timedelta(hours=4)).timestamp()),
    }
    return jwt.encode(payload, SECRET_KEY_NORMAL, algorithm="HS256")

def generate_mc_token(user_id):
    payload = {
        "userId": user_id,
        "locationCode": "97439",
        "group": "MYCHANNEL",
        "subGroup": "RetrieveSIM",
        "iat": int(datetime.now().timestamp()),
        "exp": int((datetime.now() + timedelta(hours=4)).timestamp()),
    }
    return jwt.encode(payload, SECRET_KEY_MC, algorithm="HS256")

def generate_mc_token_prod(user_id):
    payload = {
        "userId": user_id,
        "locationCode": "97439",
        "group": "MYCHANNEL",
        "subGroup": "RetrieveSIM",
        "iat": int(datetime.now().timestamp()),
        "exp": int((datetime.now() + timedelta(hours=4)).timestamp()),
    }
    return jwt.encode(payload, SECRET_KEY_MC_PROD, algorithm="HS256")

def main():
    for key, value in TOKEN_TYPE.items():
        print(f"{key}: {value}")
    type = input("Select token type: ")
    user = input("Enter user ID: ")
    user_id = USER_MAP.get(user, user.upper())

    if type == "1":
        token = generate_normal_token(user_id)
    elif type == "2":
        token = generate_print_sticker_token(user_id)
    elif type == "3":
        token = generate_mc_token(user_id)
    elif type == "4":
        token = generate_mc_token_prod(user_id)
    else:
        print("Invalid type")
        exit(1)

    print(f"Token: {token}")
    input("Press Enter to exit...")

if __name__ == "__main__":
    main()