from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func


db = SQLAlchemy()


class Transaction(db.Model):
    __tablename__ = "transactions"

    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.Numeric, precision=2, nullable=False)
    reciever_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    sender_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    debt_id = db.Column(
        db.Integer, db.ForeignKey('debts.id'), nullable=False)
    expense_id = db.Column(
        db.Integer, db.ForeignKey('expenses.id'), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    update_at = db.Column(db.DateTime(timezone=True),
                          server_default=func.now())
