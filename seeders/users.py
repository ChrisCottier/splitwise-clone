from app.models.debts import Debt
from app.models.friends import Friend
from app.models.users import User
from app.models.expenses import Expense
from app import app, db

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


       for friend in friends:
            db.session.add(friend)
        expense = Expense(title='sample', note='sample note', amount=234,
                          split_type='even', settled_up=False, creator_id=1)
        db.session.add(expense)
        db.session.commit()

        db.session.add(debt)
        db.session.commit()
