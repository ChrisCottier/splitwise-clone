from flask import Blueprint, jsonify, request, jsonify
import bcrypt
from app.models import db
from app.models.users import User
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
  hashed_password=bcrypt.hashpw(password, bcrypt.gensalt())

  # Generate and add new user to db
  new_user=User(first_name=data['firstName'],
  last_name=data['lastName'],
  email=data['email'],
  hashed_password=hashed_password)
  db.session()
  db.session.add(new_user)
  db.session.commit()

  # get user and create jwt to return
  user=User.query.filter(User.email == data['email']).first().to_dict()
  print(user)

  jwt=create_jwt(user)
  print(jwt)

  return jsonify(str(jwt))

@user_routes.route('/login', methods=['post'])
def login():
  data=request.json
  user=User.query.filter(User.email == data['email']).first()
  hashed_password = user.hashed_password
  if bcrypt.checkpw(data['password'].encode(), hashed_password.encode()):
    print('match')

  return jsonify(hashed_password)








