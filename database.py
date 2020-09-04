from app import app, db
from seeders.comments import seed_comments
from seeders.debts import seed_debts
from seeders.expenses import seed_expenses
from seeders.friends import seed_friends
from seeders.users import seed_users
from dotenv import load_dotenv
load_dotenv()


with app.app_context():
    # drop and remake all current tables before seeding
    db.drop_all()
    db.create_all()
    # add the seed objects and flush the session to ensure primary keys are generated
    db.session.add_all(seed_comments)
    db.session.add_all(seed_friends)
    db.session.add_all(seed_users)
    db.session.flush()
    db.session.commit()
