from app.models.debts import Debt
from app.models.friends import Friend
from app.models.users import User
from app.models.expenses import Expense
from app import app, db
from dotenv import load_dotenv
load_dotenv()
with app.app_context():
    db.drop_all()
    db.create_all()
    users = [
        User(email='test1@test.test', name='test1',
             hashed_password='$2b$14$eSoF0LBQoIgAdcfL5eTzDO95Tk1l3N7/JUhYJJq9A/D7GyufoA2Ai'),
        User(email='test2@test.test', name='test2',
             hashed_password='$2b$14$eSoF0LBQoIgAdcfL5eTzDO95Tk1l3N7/JUhYJJq9A/D7GyufoA2Ai'),
        User(email='test3@test.test', name='test3',
             hashed_password='$2b$14$eSoF0LBQoIgAdcfL5eTzDO95Tk1l3N7/JUhYJJq9A/D7GyufoA2Ai'),
        User(email='test4@test.test', name='test4',
             hashed_password='$2b$14$eSoF0LBQoIgAdcfL5eTzDO95Tk1l3N7/JUhYJJq9A/D7GyufoA2Ai'),
        User(email='test5@test.test', name='test5',
             hashed_password='$2b$14$eSoF0LBQoIgAdcfL5eTzDO95Tk1l3N7/JUhYJJq9A/D7GyufoA2Ai'),
        User(email='test6@test.test', name='test6',
             hashed_password='$2b$14$eSoF0LBQoIgAdcfL5eTzDO95Tk1l3N7/JUhYJJq9A/D7GyufoA2Ai'),
        User(email='test7@test.test', name='test7',
             hashed_password='$2b$14$eSoF0LBQoIgAdcfL5eTzDO95Tk1l3N7/JUhYJJq9A/D7GyufoA2Ai'),
    ]
    for user in users:
        db.session.add(user)
    db.session.commit()
    friends = [
        Friend(user1_id=1, user2_id=2),
        Friend(user1_id=1, user2_id=3),
        Friend(user1_id=1, user2_id=5),
        Friend(user1_id=1, user2_id=6),
    ]
    for friend in friends:
        db.session.add(friend)
    expense = Expense(title='sample', note='sample note', amount=234,
                      split_type='even', settled_up=False, creator_id=1)
    db.session.add(expense)
    db.session.commit()
    debt = Debt(amount=3.50, lender_id=1, borrower_id=2, expense_id=expense.id)
    db.session.add(debt)
    db.session.commit()
    # ian = User(username = 'Ian', email = 'ian@aa.io')
    # javier = User(username = 'Javier', email = 'javier@aa.io')
    # dean = User(username = 'Dean', email = 'dean@aa.io')
    # angela = User(username = 'Angela', email = 'angela@aa.io')
    # soonmi = User(username = 'Soon-Mi', email = 'soonmi@aa.io')
    # alissa = User(username = 'Alissa', email = 'alissa@aa.io')
    # db.session.add(ian)
    # db.session.add(javier)
    # db.session.add(dean)
    # db.session.add(angela)
    # db.session.add(soonmi)
    # db.session.add(alissa)
    # user = User(email="new", hashed_password="pass", first_name="afdsuh", last_name="asdfe")
    # db.session.add(user)
    # db.session.commit()

    # sample = Expense(title="ertgreo", note="adfhn", amount=1234.45, split_type="even", settled_up=False, creator_id=user.id)
    # sample2 = Expense(title="lolololo", note="jfdiasbnuifng", amount=1234.45802, split_type="even", settled_up=False, creator_id=user.id)
    # db.session.add(sample)
    # db.session.add(sample2)
    # db.session.commit()
