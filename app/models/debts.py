from . import db, func


class Debt(db.Model):
    __tablename__ = "debts"

    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.DECIMAL(10, 2), nullable=False)
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
    lender = db.relationship("User", foreign_keys=[lender_id])
    borrower = db.relationship("User", foreign_keys=[borrower_id])



    def to_dict(self):
        return {
            "id": self.id,
            "amount": str(self.amount),
            "lender_id": self.lender_id,
            "borrower_id": self.borrower_id,
            "expense_id": self.expense_id,
            "created_at": self.created_at,
            "update_at": self.update_at,
            "lender": self.lender.to_dict(),
            "borrower": self.borrower.to_dict()
        }
