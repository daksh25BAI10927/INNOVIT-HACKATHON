
import json
import os

USERS_FILE = "user.json"

if os.path.exists(USERS_FILE):
    with open(USERS_FILE, "r") as f:
        users = json.load(f)
else:
    users = {}


def save_users():
    with open(USERS_FILE, "w") as f:
        json.dump(users, f, indent=2)


def create_user(name, user_type="indian", interests=None):
    if interests is None:
        interests = []

    user_id = name.lower().replace(" ", "_")

    users[user_id] = {
        "user_id": user_id,
        "name": name,
        "user_type": user_type,
        "interests": interests
    }

    save_users()
    return users[user_id]


def get_user(user_id):
    return users.get(user_id)
