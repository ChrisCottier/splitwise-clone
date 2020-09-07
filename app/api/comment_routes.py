from flask import Blueprint, jsonify, request
from app.models import db
from app.models.users import User
from app.models.comments import Comment

comment_routes=Blueprint('comments', __name__)

@comment_routes.route('', methods=['post'])
def post_comment():
    data=request.json
    message = data['comment']
    user_id = data['userId']
    expense_id=data['expenseId']
    
    new_comment=Comment(message=message, user_id=user_id, expense_id=expense_id)
    db.session.add(new_comment)
    db.session.commit()

    return jsonify(new_comment.to_dict())
