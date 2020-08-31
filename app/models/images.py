from . import db, func
class Image(db.Model):
    __tablename__ = "images"

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String, nullable=False)
    table = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    update_at = db.Column(db.DateTime(timezone=True),
                          onupdate=func.now())

    # profile_id = db.Column(
    #     db.Integer, db.ForeignKey('users.id'))
    # expense_id = db.Column(
    #     db.Integer, db.ForeignKey('expenses.id'))
