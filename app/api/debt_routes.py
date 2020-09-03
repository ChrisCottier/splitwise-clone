from flask import Blueprint, jsonify, request
from app.models import db
from app.models.users import User
from app.models.debts import Debt

debt_routes = Blueprint('debts', __name__)

@debt_routes.route('/user/<id>')
def get_users_debts(id):
  userId=int(id)
  i_owe=Debt.query.filter(Debt.borrower_id == userId).all()
  i_owe_dicts=[debt.to_dict() for debt in i_owe]

  total_i_owe=sum(debt.amount for debt in i_owe)
  print('i owe',total_i_owe)

  i_am_owed=Debt.query.filter(Debt.lender_id == userId).all()
  i_am_owed_dicts=[debt.to_dict() for debt in i_am_owed]

  total_i_am_owed=sum(debt.amount for debt in i_am_owed)
  net_owed= total_i_am_owed - total_i_owe
  print('i am owed', total_i_am_owed)
  # total_i_am_owed=

  return jsonify({
    "iOwe":i_owe_dicts,
    "iAmOwed":i_am_owed_dicts,
    "totalIAmOwed": str(total_i_am_owed),
    "totalIOwe": str(total_i_owe),
    "netOwed": str(net_owed)})

