from flask import Blueprint, jsonify, request
from app.models import db
from app.models.friends import Friend
friend_routes = Blueprint('friends', __name__)
#############################################
# make sure to register this blueprint!!!!
#############################################

@friend_routes.route('/<id>')
def index(id):
    friends = Friend.query.filter(Friend.user1_id == id or Friend.user2_id == id).all()
    return jsonify({"friends": [user.to_dict() for user in response]})
