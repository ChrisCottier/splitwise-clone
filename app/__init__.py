import os
from flask import Flask, render_template, request, session
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_migrate import Migrate


from app.models import db
from app.models.images import Image
from app.models.users import User
from app.models.expenses import Expense
from app.models.debts import Debt
from app.models.transactions import Transaction
from app.models.comments import Comment
from app.models.friends import Friend
from app.models.groups import Group

from app.api.user_routes import user_routes
from app.api.friend_routes import friend_routes
from app.api.expense_routes import expense_routes
from app.api.activity_routes import activity_routes
from app.api.debt_routes import debt_routes
from app.api.comment_routes import comment_routes

from app.config import Config

app = Flask(__name__, static_url_path='')

app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(friend_routes, url_prefix='/api/friends')
app.register_blueprint(expense_routes, url_prefix='/api/expenses')
app.register_blueprint(activity_routes, url_prefix='/api/activities')
app.register_blueprint(debt_routes, url_prefix='/api/debts')
app.register_blueprint(comment_routes, url_prefix='/api/comments')

db.init_app(app)
migrate = Migrate(app, db)

# Application Security
CORS(app)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
                        generate_csrf(),
                        secure=True if os.environ.get('FLASK_ENV') else False,
                        samesite='Strict' if os.environ.get(
                            'FLASK_ENV') else None,
                        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path>')
def react_root(path):
    return app.send_static_file('index.html')
