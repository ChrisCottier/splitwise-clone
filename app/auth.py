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
    if not user_exists:
        return ['There is no account associated with that email.']

    hashed_password = user_exists.hashed_password
    if not bcrypt.checkpw(password.encode(), hashed_password.encode()):
        return ['Invalid password for that account.']

    return []


def validate_sign_up(data):
    name = data['name']
    email = data['email']
    password = data['password']

    errors = []

    user_exists = User.query.filter(User.email == email).first()
    if user_exists:
        errors.append('That email is already in use by another user.')

    fields = [name, email, password]
    title = ['Name', 'Email', 'Password']

    for i in range(len(title)):
        if (len(fields[i]) < 3):
            errors.append(
                f'{title[i]} must be at least 3 characters long')
        if (len(fields[i]) > 49):
            errors.append(
                f'{title[i]} must be less than 50 characters long')
    return errors
