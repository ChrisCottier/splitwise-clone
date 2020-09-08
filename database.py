from dotenv import load_dotenv
from seeders.demo_user import demo_user
from app.models.users import User
from seeders.aws import asset_seeds, user_img_seeds
from seeders.images import seed_images
from seeders.transactions import seed_transactions
from seeders.users import seed_users
from seeders.groups import seed_groups
from seeders.friends import seed_friends
from seeders.expenses import seed_expenses
from seeders.debts import seed_debts
from app import app, db
seeders.comments import seed_comments
# import demo_password
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
    create_demo_user = db.session.query(User).get(1)
    # .query.filter(
    #     User.id == 1).first()  # THIS OBJ
    # .update({User.name: demo_user.name, User.email: demo_user.email,     User.hashed_password: demo_user.hashed_password, User.profile_img: demo_user.profile_img}, synchronize_session=False)
    # create_demo_user = db.session.query(User).get(
    #     1).update({User.name: demo_user.name, User.email: demo_user.email,
    #                User.hashed_password: demo_user.hashed_password, User.profile_img: demo_user.profile_img}, synchronize_session=False)
    # print(create_demo_user)
    # print(demo_user)
    # create_demo_user = demo_user
    # print(create_demo_user)
    create_demo_user.name = "DemoUser"
    create_demo_user.hashed_password = bcrypt.hashpw(
        pswrd, bcrypt.gensalt(4)).decode('utf-8')
    create_demo_user.email = 'DemoUserEmail@demo.com'
    create_demo_user.profile_img = 301
    db.session.commit()
