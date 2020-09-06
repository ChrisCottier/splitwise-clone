from . import db, func


class Group(db.Model):
    __tablename__ = "groups"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    user1_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    creator = db.relationship('User', foreign_keys=[user1_id])
    user2_id = db.Column(
        db.Integer, db.ForeignKey('users.id'))
    user3_id = db.Column(
        db.Integer, db.ForeignKey('users.id'))
    user4_id = db.Column(
        db.Integer, db.ForeignKey('users.id'))
    user5_id = db.Column(
        db.Integer, db.ForeignKey('users.id'))
    user6_id = db.Column(
        db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    update_at = db.Column(db.DateTime(timezone=True),
                          onupdate=func.now())

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "user1_id": self.user1_id,
            "creator": self.creator.to_dict(),
            "user2_id": self.user2_id,
            "user3_id": self.user3_id,
            "user4_id": self.user4_id,
            "user5_id": self.user5_id,
            "user6_id": self.user6_id,
            "created_at": self.created_at,
            "update_at": self.update_at,
        }
