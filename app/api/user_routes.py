from flask import Blueprint, jsonify, request
import bcrypt
from sqlalchemy import or_
from app.models import db
from app.models.users import User
from app.models.friends import Friend
from app.auth import create_jwt, validate_jwt, validate_log_in
user_routes = Blueprint('users', __name__)


@user_routes.route('')
def index():
    response = User.query.all()
    return {"users": [user.to_dict() for user in response]}


@user_routes.route('', methods=['post'])
def sign_up():
    data = request.json
    # Create a hashed password
    password = data['password'].encode()
    hashed_password = bcrypt.hashpw(
        password, bcrypt.gensalt(14)).decode('utf-8')

    # Generate and add new user to db
    new_user = User(name=data['name'],
                    email=data['email'],
                    hashed_password=hashed_password)
    db.session()
    db.session.add(new_user)
    db.session.commit()

    # get user and create jwt to return
    user = User.query.filter(User.email == data['email']).first().to_dict()

    jwt = create_jwt(user)

    return jsonify({"user": user, "token": str(jwt)})


@user_routes.route('/login', methods=['post'])
def login():
    data = request.json
    errors = validate_log_in(data)
    if len(errors) > 0:
        return jsonify({'validated': False, 'errors': errors})

    user = User.query.filter(User.email == data['email']).first().to_dict()
    jwt = create_jwt(user)
    return jsonify({'validated': True, "user": user, "token": str(jwt)})

    # user=User.query.filter(User.email == data['email']).first()
    # print(user)
    # hashed_password = user.hashed_password
    # if bcrypt.checkpw(data['password'].encode(), hashed_password.encode()):

    #   user_data=user.to_dict()
    #   jwt=create_jwt(user_data)
    #   return jsonify({ "user": user_data, "token": str(jwt)})
    # else:

    #   return jsonify('Bad Login')


@user_routes.route('/restore')
def restore():
    # auth_header= request.headers['Authorization']
    # print(auth_header)
    # print(auth_header[7:])
    validated = validate_jwt(request)
    if (validated):
        return validated
    else:
        return jsonify(None)


@user_routes.route('/query/<user_id>/<query>')
def query_matching_users(user_id, query):

    # get list of frienships
    friendships = Friend.query.filter(
        or_(Friend.user1_id == int(user_id), Friend.user2_id == int(user_id))).all()
    friendship_dict = [friendship.to_dict() for friendship in friendships]

    # get list of all ids
    all_ids = []
    for friendship in friendship_dict:
        all_ids.append(friendship["user1_id"])
        all_ids.append(friendship["user2_id"])
    # filter to where id not queried id
    all_friend_ids = [
        friend_id for friend_id in all_ids if friend_id != int(user_id)]

    matches = User.query.filter(User.name.contains(query),
                                User.id.in_(all_friend_ids) == False,
                                User.id != int(user_id)).limit(10)
    matches_dict = [user.to_dict() for user in matches]
    return jsonify({'matches': matches_dict, 'query': query})
