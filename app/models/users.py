from . import db, func
class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), unique=True, nullable=False)
    hashed_password = db.Column(db.String, nullable=False)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    profile_img = db.Column(db.Integer, db.ForeignKey('images.id'))
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    update_at = db.Column(db.DateTime(timezone=True),
                          onupdate=func.now())

    def to_dict(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "email": self.email
        }
