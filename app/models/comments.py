from . import db, func


class Comment(db.Model):
    __tablename__ = "comments"

    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String(255), nullable=False)
    user_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    expense_id = db.Column(
        db.Integer, db.ForeignKey('expenses.id'), nullable=False)
    expense = db.relationship('Expense', foreign_keys=[expense_id])
    commentor = db.relationship('User', foreign_keys=[user_id])
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    update_at = db.Column(db.DateTime(timezone=True),
                          onupdate=func.now())

    def to_dict(self):
        return {
            "id": self.id,
            "message": self.message,
            "user_id": self.user_id,
            "expense_id": self.expense_id,
            "expense": self.expense.to_dict(),
            "commentor": self.commentor.to_dict(),
            "created_at": self.created_at,
            "update_at": self.update_at,
        }
