from . import db, func
class Debt(db.Model):
    __tablename__ = "debts"

    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.DECIMAL(10,2), nullable=False)
    lender_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    borrower_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    expense_id = db.Column(
        db.Integer, db.ForeignKey('expenses.id'), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    update_at = db.Column(db.DateTime(timezone=True),
                          onupdate=func.now())
