from flask import Blueprint, jsonify, request
from sqlalchemy import or_
from app.models import db
from app.models.friends import Friend
from app.models.users import User

friend_routes = Blueprint('friends', __name__)


@friend_routes.route('/<id>')
def index(id):

    # get list of frienships
    friendships = Friend.query.filter(
        or_(Friend.user1_id == int(id), Friend.user2_id == int(id))).all()
    friendship_dict = [friendship.to_dict() for friendship in friendships]

    # get list of all ids
    all_ids = []
    for friendship in friendship_dict:
        all_ids.append(friendship["user1_id"])
        all_ids.append(friendship["user2_id"])
    # filter to where id not queried id
    all_friend_ids = [
        friend_id for friend_id in all_ids if friend_id != int(id)]

    # query users for
    friend_users = User.query.filter(User.id.in_(all_friend_ids)).all()
    friend_users_dict = [user.to_dict() for user in friend_users]
    return jsonify(friend_users_dict)
