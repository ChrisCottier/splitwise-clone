from flask import Blueprint, jsonify, request

from app.models import db
from app.models.expenses import Expense

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

  # make new debts for each friend in friends on expense


  db.session.commit()

  return jsonify('idk yet')
