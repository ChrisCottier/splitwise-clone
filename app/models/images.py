from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func

db = SQLAlchemy()


class Image(db.Model):
    __tablename__ = "images"

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(50), nullable=False)
    profile_id = db.Column(
        db.Integer, db.ForeignKey('users.id'))
    expense_id = db.Column(
        db.Integer, db.ForeignKey('expenses.id'))
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    update_at = db.Column(db.DateTime(timezone=True),
                          server_default=func.now())
