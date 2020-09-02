from flask import Blueprint, jsonify, request
from sqlalchemy import or_
from app.models import db
from app.models.friends import Friend
from app.models.users import User

friend_routes = Blueprint('friends', __name__)
#############################################
# make sure to register this blueprint!!!!
#############################################

@friend_routes.route('/<id>')
def index(id):
    # friends = Friend.query.filter(
    #     Friend.user1_id == id or Friend.user2_id == id
    #     )
    #     .join(
    #         User, Friend.user1_id
    #     )
    #     .all()
    # return jsonify({"friends": [user.to_dict() for user in response]})

    print(id)
    #get list of frienships
    friendships= Friend.query.filter(or_(Friend.user1_id==int(id), Friend.user2_id==int(id))).all()
    print('FRIENDSHIPS',friendships)
    friendship_dict= [friendship.to_dict() for friendship in friendships]
    print(friendship_dict)

    # get list of all ids
    all_ids=[]
    for friendship in friendship_dict:
        all_ids.append(friendship["user1_id"])
        all_ids.append(friendship["user2_id"])
    print('all ids', all_ids)
    # filter to where id not queried id
    all_friend_ids=[friend_id for friend_id in all_ids if friend_id != int(id)]
    print('all friend ids', all_friend_ids)

    #query users for 
    friend_users= User.query.filter(User.id.in_(all_friend_ids)).all()
    friend_users_dict=[user.to_dict() for user in friend_users]
    print('dict of friends',friend_users_dict)
    return jsonify(friend_users_dict)

