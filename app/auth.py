import jwt
from .config import Config

def create_jwt(user):
  user_data={
    "id": user["id"],
    "email":user["email"],
  }
  new_jwt = jwt.encode(user_data, Config.JWT_SECRET, algorithm='HS256')
  return new_jwt
