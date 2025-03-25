import pyautogui
import time

CLICK_INTERVAL = 60  # seconds

def get_mouse_position():
    # Use the current mouse position
    x, y = pyautogui.position()
    return x, y

print("Auto click has started!", flush=True)

try:
    while True:
        print("Please move the mouse to the desired position.")
        time.sleep(5)  # Wait for 5 seconds for the user to move the mouse
        MOUSE_X, MOUSE_Y = get_mouse_position()

        print(f"Mouse position: ({MOUSE_X}, {MOUSE_Y})")
        try:
            while True:
                pyautogui.moveTo(MOUSE_X, MOUSE_Y)
                pyautogui.click()
                print(f"Clicked at position: ({MOUSE_X}, {MOUSE_Y})")
                time.sleep(CLICK_INTERVAL)
        except Exception as e:
            print(f"Error clicking at position ({MOUSE_X}, {MOUSE_Y}): {e}")
            continue
except KeyboardInterrupt:
    print("Done!")