from . import db, func


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), unique=True, nullable=False)
    hashed_password = db.Column(db.String, nullable=False)
    name = db.Column(db.String(50), nullable=False)
    profile_img = db.Column(db.Integer, db.ForeignKey('images.id'))
    image_url = db.relationship('Image', foreign_keys=[profile_img])
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    update_at = db.Column(db.DateTime(timezone=True),
                          onupdate=func.now())

    def to_dict(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "profile_img": self.profile_img,
            "image_url": self.image_url.to_dict(),
            "created_at": self.created_at,
            "update_at": self.update_at,
        }
