from flask import Blueprint, jsonify, request

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
    recent_activity = []

    #Get all expenses associated with the current user
    
