from . import db, func


class Activity(db.Model):
    __tablename__ = "activities"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        'users.id'), unique=True, nullable=False)
    expenses = db.Column(db.Integer, db.ForeignKey('expenses.id'))
    debts = db.Column(db.Integer, db.ForeignKey('debts.id'))
    transactions = db.Column(db.Integer, db.ForeignKey('transactions.id'))
    comments = db.Column(db.Integer, db.ForeignKey('comments.id'))
    friends = db.Column(db.Integer, db.ForeignKey('friends.id'))
    groups = db.Column(db.Integer, db.ForeignKey('groups.id'))
    images = db.Column(db.Integer, db.ForeignKey('images.id'))
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    update_at = db.Column(db.DateTime(timezone=True),
                          server_onupdate=func.now())

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "expenses": self.expenses,
            "debts": self.debts,
            "transactions": self.transactions,
            "friends": self.friends,
            "groups": self.groups,
            "images": self.images,
            "created_at": self.created_at,
            "update_at": self.update_at,
        }
