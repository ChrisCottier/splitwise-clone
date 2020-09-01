from . import db, func, User


class Friend(db.Model):
    __tablename__ = "friends"

    id = db.Column(db.Integer, primary_key=True)
    user1_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    user2_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    update_at = db.Column(db.DateTime(timezone=True),
                          onupdate=func.now())

    def to_dict(self):
        return {
            "id": self.id,
            "user1_id": self.user1_id,
            "user2_id": self.user2_id,
            "created_at": self.created_at,
            "update_at": self.update_at,
        }
