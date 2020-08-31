from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func

db = SQLAlchemy()


class Group(db.Model):
    __tablename__ = "groups"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    user1_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
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
                          server_default=func.now())
