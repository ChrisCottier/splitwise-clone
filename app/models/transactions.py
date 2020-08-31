from . import db, func


class Transaction(db.Model):
    __tablename__ = "transactions"

    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.DECIMAL(10, 2), nullable=False)
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
                          onupdate=func.now())

    def to_dict(self):
        return {
            "id": self.id,
            "amount": self.amount,
            "sender_id": self.sender_id,
            "debt_id": self.debt_id,
            "expense_id": self.expense_id,
            "created_at": self.created_at,
            "update_at": self.update_at,
        }
