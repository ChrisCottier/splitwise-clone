from . import db, func


class Expense(db.Model):
    __tablename__ = "expenses"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(75), nullable=False)
    note = db.Column(db.String(250))
    amount = db.Column(db.DECIMAL(10, 2), nullable=False)
    split_type = db.Column(db.String)
    settled_up = db.Column(db.Boolean, default=False)
    expense_img = db.Column(db.Integer, db.ForeignKey('images.id'), default=1)
    image_url = db.relationship('Image', foreign_keys=[expense_img])
    creator_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    creator = db.relationship('User', foreign_keys=[creator_id])
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    update_at = db.Column(db.DateTime(timezone=True),
                          onupdate=func.now())

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "note": self.note,
            "amount": str(self.amount),
            "split_type": self.split_type,
            "settled_up": self.settled_up,
            "expense_img": self.expense_img,
            "image_url": self.image_url.to_dict(),
            "creator_id": self.creator_id,
            "creator": self.creator.to_dict(),
            "created_at": self.created_at,
            "update_at": self.update_at,
        }
