from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models.expenses import Expense
from app.models.users import User

with app.app_context():
  db.drop_all()
  db.create_all()

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
