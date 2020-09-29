import jwt
from .config import Config
import bcrypt

from app.models.users import User


def create_jwt(user):
    user_data = {
        "id": user["id"],
        "email": user["email"],
        "name": user["name"]
    }
    new_jwt = jwt.encode(user_data, Config.JWT_SECRET, algorithm='HS256')
    return new_jwt


def validate_jwt(request):
    auth_header = request.headers['Authorization']
    token = auth_header[7:]
    try:
        payload = jwt.decode(token, Config.JWT_SECRET)
        return {"user": payload, "token": token}
    except:
        return False


def validate_log_in(data):
    email = data['email']
    password = data['password']

    user_exists = User.query.filter(User.email == email).first()
    print('user exists', user_exists)
    if not user_exists:
        return ['There is no account associated with that email.']

    hashed_password = user_exists.hashed_password
    if not bcrypt.checkpw(password.encode(), hashed_password.encode()):
        return ['Invalid password for that account.']

    return []

    # email not used
    # passwords match
    # lengths
