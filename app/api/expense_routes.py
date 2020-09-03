from flask import Blueprint, jsonify, request

from app.models import db
from app.models.expenses import Expense
from app.models.debts import Debt

expense_routes = Blueprint('expenses', __name__)

@expense_routes.route("", methods=["post"])
def post_expense():
  data = request.json
  print(data)

  friends_on_expense = data['friendsOnExpense']
  amount = int(data['amount'])
  title = data['title']
  user_id=data['userId']
  split_type=data['splitType']
  note=data['note']
  settled_up=data['settledUp']

  num_of_shares=len(friends_on_expense) + 1
  debt_per_person = amount/num_of_shares

  # new expense
  new_expense=Expense(
  title=title,
  note=note,
  amount=amount,
  split_type=split_type,
  settled_up=settled_up,
  creator_id=user_id)

  db.session.add(new_expense)
  db.session.commit()

  # make new debts for each friend in friends on expense
  new_expense = Expense.query.filter(Expense.creator_id == user_id).order_by(Expense.created_at.desc()).first().to_dict()
  print(new_expense)
  new_expense_id=new_expense['id']

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

  ## Returns all activity/expenses for a specific user
  @expense_routes.route('/expenses/all/:id')
  def all_expenses():
    all_user_expenses = Expense.query.filter_by(expenses.id).all()
    return all_user_expenses
    print(all_user_expenses)

  ## Delete expenses for a specific user
  @expense_routes.route('/expenses/:id', methods=['DELETE', 'GET'])
  def delete_expense():
    delete_me = Expenses(expense=data['expense'])
    db.session()
    db.session.delete(delete_me)
    db.session.commit()

  ## Returns a specific activity/expense for a user
  def get_expense():
    user_expense = Activities.query.filter_by(activity.id).all()
    return user_expenses

  ## Post a new comment to an expense
  @expense_routes.route('expenses/:id/comments', methods=['POST'])
  def post_comment():
    new_comment = Activity(comments=data['comments'])
    db.session()
    db.session.add(new_comment)
    db.session.commit()

  ## Delete a comment from an expense
  @expense_routes.routes('expenses/comments/:id', methods=['DELETE'])
  def delete_comment():
    delete_comment = Comments(comment=data['comment'])
    db.session()
    db.session.delete(delete_comment)
    db.session.commit()

  ## Update the title or amount associated with an amount
  @expense_routes.route('expenses/:id', methods=['PATCH'])
  def update_title():
    update_title = Expenses.query.filter_by(id = expense.id).update(expense.title)
    db.session.commit()

    update_amount = Expenses.query.filter_by(id = expense.id).update(expense.amount)
    db.session.commit()

  ## Return all comments associated with an expense
  @expense_routes.route('expenses/:id/comments/all')
  def get_all():
    get_comment = Comments.query.filter(id = Comment.id == Expense.id).all()
    return get_comment




  