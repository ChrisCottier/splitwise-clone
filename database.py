from dotenv import load_dotenv
# from seeders.demo_user import demo_user
from app.models.users import User
from seeders.aws import asset_seeds, user_img_seeds
from seeders.images import seed_images, demo_user_img
from seeders.transactions import seed_transactions
from seeders.comments import seed_comments
from seeders.users import seed_users
from seeders.groups import seed_groups
from seeders.friends import seed_friends
from seeders.expenses import seed_expenses
from seeders.debts import seed_debts
from app import app, db
import bcrypt
load_dotenv()


with app.app_context():
    # drop and remake all current tables before seeding
    db.drop_all()
    db.create_all()
    # add the seed objects
    # flush the session to ensure primary keys are generated then commit
    # db.session.add_all(asset_seeds)
    db.session.add_all(user_img_seeds)
    db.session.flush()
    db.session.add_all(seed_users)
    # db.session.add_all(seed_images)
    db.session.flush()
    db.session.add_all(seed_friends)
    db.session.add_all(seed_groups)
    db.session.add_all(seed_expenses)
    db.session.flush()
    db.session.add_all(seed_comments)
    db.session.add_all(seed_debts)
    db.session.flush()
    db.session.add_all(seed_transactions)
    db.session.commit()

    db.session.add_all(demo_user_img)
    db.session.flush()

    create_demo_user = db.session.query(User).get(1)
    create_demo_user.name = "DemoUser"
    pswrd = 'demopassword'.encode()
    create_demo_user.hashed_password = bcrypt.hashpw(
        pswrd, bcrypt.gensalt(14)).decode('utf-8')
    create_demo_user.email = 'DemoUserEmail@demo.com'
    create_demo_user.profile_img = 301
    db.session.commit()
