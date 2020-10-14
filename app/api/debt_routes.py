from flask import Blueprint, jsonify, request
from app.models import db
from app.models.users import User
from app.models.debts import Debt
from app.models.transactions import Transaction

debt_routes = Blueprint('debts', __name__)

@debt_routes.route('/user/<id>')
def get_users_debts(id):
  userId=int(id)
  i_owe=Debt.query.filter(Debt.borrower_id == userId).all()
  i_owe_dicts=[debt.to_dict() for debt in i_owe]

  total_i_owe=sum(debt.amount for debt in i_owe)

  i_am_owed=Debt.query.filter(Debt.lender_id == userId).all()
  i_am_owed_dicts=[debt.to_dict() for debt in i_am_owed]

  total_i_am_owed=sum(debt.amount for debt in i_am_owed)
  net_owed= total_i_am_owed - total_i_owe
  # total_i_am_owed=

  return jsonify({
    "iOwe":i_owe_dicts,
    "iAmOwed":i_am_owed_dicts,
    "totalIAmOwed": str(total_i_am_owed),
    "totalIOwe": str(total_i_owe),
    "netOwed": str(net_owed)})

@debt_routes.route('/<debt_id>/users/<user_id>', methods=['PATCH'])
def pay_debt(debt_id, user_id):
  # we should validate jwt for this route
  user_id = int(user_id)
  debt_id = int(debt_id)
  pay_amount = float(request.json)

  user_debt = Debt.query.get(debt_id)

  new_amount = float(user_debt.amount) - pay_amount
  
  # We don't want users to pay more than debt amount
  if new_amount < 0:
    return jsonify({'success': False, 'errors': ['Cannot pay more than debt amount']})

  #passed validation, we update the schema
  user_debt.amount = new_amount
  new_transaction = Transaction(
    amount = pay_amount,
    reciever_id = user_debt.lender_id,
    sender_id = user_id,
    debt_id = debt_id,
    expense_id = user_debt.expense_id
    )
  db.session.add(new_transaction)
  
  db.session.commit()
  
  updated_debts = Debt.query.filter(Debt.borrower_id == user_id).all()
  updated_debts = [debt.to_dict() for debt in updated_debts]

  return jsonify({'success': True,'updated_debts':updated_debts, 'transaction': new_transaction.to_dict()})
