from flask import Blueprint, jsonify, request, jsonify
from bcrypt import bcrypt
from app.models import User, db
from app.auth import create_jwt
user_routes = Blueprint('users', __name__)

@user_routes.route('/')
def index():
  response = User.query.all()
  return { "users": [user.to_dict() for user in response]}


@user_routes.route('/', methods=['post'])
def sign_up():
  data = request.json
  print(data)
  # Create a hashed password
  password=data['password'].encode()
  hashed_password=bcrypt(password, bcrypt.gensalt())

  # Generate and add new user to db
  new_user=User(firstName=data['firstName'],
  lastName=data['lastName'],
  email=data['email'],
  password=hashed_password)
  db.session()
  db.add(new_user)
  db.commit()

  # get user and create jwt to return
  user=User.query.filter(User.email == data['email']).first()
  jwt=create_jwt(user)

  return jsonify(jwt)

