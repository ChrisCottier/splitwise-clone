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

  return jsonify(new_expense)
