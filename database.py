from seeders import comments, debts, friends, users
from app import app, db
from dotenv import load_dotenv
load_dotenv()


with app.app_context():
    db.drop_all()
    db.create_all()

    for user in users:
        db.session.add(user)
    for friend in friends:
        db.session.add(friend)
    db.session.add(debt)
    db.session.add(expense)
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
#   for user in users:
#     db.session.add(user)
#   db.session.commit()

#   friends = [
#     Friend(user1_id=1, user2_id=2),
#     Friend(user1_id=1, user2_id=3),
#     Friend(user1_id=1, user2_id=5),
#     Friend(user1_id=1, user2_id=6),
#   ]

#   for friend in friends:
#     db.session.add(friend)

#   expense=Expense(title='sample', note='sample note', amount=234, split_type='even', settled_up=False, creator_id=1)
#   db.session.add(expense)

#   db.session.commit()

#   debt=Debt(amount = 3.50, lender_id=1, borrower_id=2, expense_id=expense.id)
#   db.session.add(debt)
#   db.session.commit()
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
