from flask import Blueprint, jsonify, request
from decimal import Decimal
from app.models import db
from app.models.expenses import Expense
from app.models.debts import Debt
from app.models.comments import Comment

expense_routes = Blueprint('expenses', __name__)


@expense_routes.route("", methods=["post"])
def post_expense():
    data = request.json
    print('recieved data', data)

    friends_on_expense = data['friendsOnExpense']
    amount = Decimal(data['amount'])
    title = data['title']
    user_id = data['userId']
    split_type = data['splitType']
    note = data['note']
    settled_up = data['settledUp']

    num_of_shares = len(friends_on_expense) + 1
    debt_per_person = amount/num_of_shares

    # new expense
    new_expense = Expense(
        title=title,
        note=note,
        amount=amount,
        split_type=split_type,
        settled_up=settled_up,
        creator_id=user_id)

    db.session.add(new_expense)
    db.session.commit()

    # make new debts for each friend in friends on expense
    new_expense = Expense.query.filter(Expense.creator_id == user_id).order_by(
        Expense.created_at.desc()).first().to_dict()
    print(new_expense)
    new_expense_id = new_expense['id']

    for friend in friends_on_expense:
        new_debt = Debt(
            amount=debt_per_person,
            lender_id=user_id,
            borrower_id=friend['id'],
            expense_id=new_expense_id)
        db.session.add(new_debt)

    db.session.commit()

    return jsonify('success')

    ################################# Expense & Comment Routes ################
# Return all comments associated with an user
@expense_routes.route('/<id>/comments')
def get_all(id):
    get_comments = Comment.query.filter(Comment.expense_id == int(id)).all()
    print(get_comments)
    comments = [comment.to_dict() for comment in get_comments]
    return jsonify(comments)


# Returns a specific expense for a user
@expense_routes.route('/<id>', methods=['DELETE', 'GET'])
def get_expense(id):
  user_expense = Expense.query.filter(Expense.creator_id == int(id)).all()
  expense = [Expense.to_dict() for expense in user_expense]
  return jsonify(user_expense)


# Delete expenses for a specific user
# def delete_expense(id):
#     delete_me = Expense(expense=id['expense'])
#     db.session()
#     db.session.delete(delete_me)
#     db.session.commit()

# Post a new comment to an expense
# Not Tested
@expense_routes.route('/<id>/comments', methods=['POST'])
def post_comment():
  data = request.json
  new_comment = Comment(comments=data['comments'])
  db.session()
  db.session.add(new_comment)
  db.session.commit()
  return jsonify('Your comment was posted')



# Delete a comment from an expense
# Not Tested
@expense_routes.route('/comments/<id>', methods=['DELETE'])
def delete_comment():
  delete_comment = Comment(comment=data['comment'])
  db.session()
  db.session.delete(delete_comment)
  db.session.commit()
  return jsonify('Comment was deleted')



# Update the title or amount associated with an amount
@expense_routes.route('/<id>', methods=['PUT'])
def update_title():
    update_title = Expense.query.filter_by(
        id=Expense.id).update(Expense.title)
    db.session.commit()
    return jsonify('Title Updated')
    update_amount = Expense.query.filter_by(
        id=Expense.id).update(Expense.amount)
    db.session.commit()
    return jsonify('Amount Updated')



# Not Needed
# Returns all expenses for a specific user
@expense_routes.route('/<id>/all')
def all_expenses():
  all_user_expenses = Expense.query.filter(Expense.id == int(id)).all()
  expenses = [expense.to_dict() for expense in all_user_expenses]
  return jsonify(all_user_expenses)