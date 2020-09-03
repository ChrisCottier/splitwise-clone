from flask import Blueprint, jsonify, request

from app.models import db
from app.models.activities import Activity

activity_routes = Blueprint('activities', __name__)


@activity_routes.route("")
def index():
    pass
