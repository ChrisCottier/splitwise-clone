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
    new_expense_id = new_expense['id']

    for friend in friends_on_expense:
        new_debt = Debt(
            amount=debt_per_person,
            lender_id=user_id,
            borrower_id=friend['id'],
            expense_id=new_expense_id)
        db.session.add(new_debt)

    db.session.commit()


    return jsonify(new_expense)

    ################################# Expense & Comment Routes ################
# Return all comments associated with an user
@expense_routes.route('/<id>/comments')
def get_all(id):
    get_comments = Comment.query.filter(Comment.expense_id == int(id)).all()
    print(get_comments)
    comments = [comment.to_dict() for comment in get_comments]
    return jsonify(comments)


# Returns a specific expense for a user
@expense_routes.route('/<id>', methods=['DELETE'])
def get_expense(id):
  user_expense = Expense.query.filter(Expense.creator_id == int(id)).all()
  expense = [Expense.to_dict() for expense in user_expense]
  return jsonify(user_expense)






# Returns all expenses for a specific user; the ones they created and the ones
# they have debts on, in a single array ordered by date
@expense_routes.route('/user/<id>')
def all_expenses(id):
    user_expenses = Expense.query.filter(Expense.creator_id == int(id)).all()
    expenses = [expense.to_dict() for expense in user_expenses]
    all_user_debts = Debt.query.filter(Debt.borrower_id == int(id)).all()
    owed_expenses = [debt.expense.to_dict() for debt in all_user_debts]
    all_user_expenses= sorted(owed_expenses + expenses, key=lambda expense: expense['id'], reverse=True)

    return jsonify(all_user_expenses)

# returns an expense with all comments and debts eager loaded
@expense_routes.route('/<id>')
def expense_details(id):
  expense=Expense.query.filter(Expense.id == int(id)).first().to_dict()

  debts = Debt.query.filter(Debt.expense_id == int(id)).all()
  debts = [debt.to_dict() for debt in debts]

  comments= Comment.query.filter(Comment.expense_id == int(id)).all()
  comments = [comment.to_dict() for comment in comments]

  return jsonify({'expense': expense, 'debts':debts, 'comments':comments})





# # works
# # Return all comments associated with an expense
# @expense_routes.route('/<id>/comments')
# def get_all(id):
#     get_comments = Comment.query.filter(Comment.expense_id == int(id)).all()
#     comments = [comment.to_dict() for comment in get_comments]
#     return jsonify(comments)


# Delete expenses for a specific user
# Not Tested
# @expense_routes.route('/<id>', methods=['DELETE'])
# def delete_expense():
#     delete_me = Expense(expense=data['expense'])
#     db.session()
#     db.session.delete(delete_me)
#     db.session.commit()

# # Returns a specific activity/expense for a user
# # Not Tested
# def get_expense(amount):
#     user_expense = Expense.query.filter(Expense.amount == amount).all()
#     expense = [Expense.to_dict() for expense in user_expense]
#     return jsonify(user_expense)


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
# @expense_routes.route('/<id>/all')
# def all_expenses():
#   all_user_expenses = Expense.query.filter(Expense.id == int(id)).all()
#   expenses = [expense.to_dict() for expense in all_user_expenses]
#   return jsonify(all_user_expenses)
# return jsonify(new_expense)

# # Returns all expenses related to a user, with associated comments and debts. Need for all expenses route
# @expense_routes.route('/user/<id>')
# def get_all_expenses(id):
#     all_user_expenses = Expense.query.filter(Expense.id == int(id)).order_by(Expense.created_at.desc()).all()
#     expenses_dict = [expense.to_dict() for expense in all_user_expenses]
#     # with_comments = [comment.to_dict]
#     for expense in expenses_dict:
#         # get all of the comments for each expense
#         comments = Comment.query.filter(Comment.expense_id == expense['id']).order_by(Comment.created_at.desc()).all()
#         comments_dict = [comment.to_dict() for comment in comments]
#         expense['comments'] = comments_dict

#         # get all the debts for each expense
#         debts = Debt.query.filter(Debt.expense_id == expense['id']).order_by(Debt.created_at.desc()).all()
#         debts_dict = [debt.to_dict() for debt in debts]
#         expense['debts'] = debts_dict



#     return jsonify(expenses_dict)
