from app import app, db
from seeders.comments import seed_comments
from seeders.debts import seed_debts
from seeders.expenses import seed_expenses
from seeders.friends import seed_friends
from seeders.groups import seed_groups
from seeders.users import seed_users
from seeders.transactions import seed_transactions
from seeders.images import seed_images
from seeders.aws import aws_seeds, user_img_seeds
from dotenv import load_dotenv
load_dotenv()


with app.app_context():
    # drop and remake all current tables before seeding
    db.drop_all()
    db.create_all()
    # add the seed objects
    # flush the session to ensure primary keys are generated then commit
    db.session.add_all(aws_seeds)
    db.session.flush()
    db.session.add_all(seed_users)
    db.session.add_all(user_img_seeds)
    # db.session.add_all(seed_images)
    db.session.flush()
    db.session.add_all(seed_friends)
    db.session.add_all(seed_groups)
    db.session.add_all(seed_expenses)
    db.session.flush()
    db.session.add_all(seed_comments)
    db.session.add_all(seed_debts)
    # db.session.add_all(seed_transactions)
    db.session.commit()
