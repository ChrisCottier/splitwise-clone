from flask import Blueprint, jsonify, request
from sqlalchemy import or_
from app.models import db
from app.models.comments import Comment
from app.models.debts import Debt
from app.models.expenses import Expense
from app.models.friends import Friend
from app.models.groups import Group
from app.models.transactions import Transaction
from app.models.users import User

activity_routes = Blueprint('activities', __name__)


@activity_routes.route("/<id>")
def index(id):

    # Get all comments associated with the current user
    user_comments = Comment.query.filter(Comment.user_id == int(id)).all()
    comments = [user_comments.to_dict() for comment in user_comments]

    # Get all debts where the current user is the lender
    user_is_lender = Debt.query.filter(Debt.lender_id == int(id)).all()
    # Get all debts where the current user is the borrower
    user_is_borrower = Debt.query.filter(Debt.borrower_id == int(id)).all()
    # Get all debts associated with the user
    all_user_debts = user_is_lender.union(user_is_borrower)
    debts = [all_user_debts.to_dict() for debt in all_user_debts]

    # Get all expenses associated with the current user
    user_expenses = Expense.query.filter(Expense.creator_id == int(id)).all()
    expenses = [user_expenses.to_dict() for expense in user_expenses]

    # Get all friends associated to the current user
    user_friends = Friend.query.filter(Friend.user1_id == int(id)).all().union(
        Friend.query.filter(Friend.user2_id == int(id)).all()
    )
    # user2_friends = Friend.query.filter(Friend.user2_id == int(id))
    # user_friends = user1_friends.union(user2_friends)
    friends = [user_friends.to_dict() for friend in user_friends]

    # Get all groups associated with the user
    user_groups = Group.query.filter(Group.user1_id == int(id)).all().union(
        Group.query.filter(Group.user2_id == int(id)).all()
    ).union(
        Group.query.filter(Group.user3_id == int(id)).all()
    ).union(
        Group.query.filter(Group.user4_id == int(id)).all()
    ).union(
        Group.query.filter(Group.user5_id == int(id)).all()
    ).union(
        Group.query.filter(Group.user6_id == int(id)).all()
    )
    groups = [user_groups.to_dict() for group in user_groups]

    # Get all transactions where the current user recieved money
    user_recieved = Transaction.query.filter(
        Transaction.reciever_id == int(id))
    # Get all transactions where the current user is sending money
    user_sent = Transaction.query.filter(Transaction.sender_id == int(id))
    # Get all transactions associated with the current user
    all_user_transactions = user_recieved.union(user_sent)
    transactions = [all_user_transactions.to_dict()
                    for transaction in all_user_transactions]

    return jsonify(
        comments=comments,
        debts=debts,
        expenses=expenses,
        friends=friends,
        groups=groups,
        transactions=transactions,
    )
