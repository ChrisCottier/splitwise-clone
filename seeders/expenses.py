from app.models.expenses import Expense
from random import uniform, randint
from . import fake, amounts, creators
# fake.bs()
# fake.catch_phrase()
seed_expenses = [Expense(title=fake.bs(), note=fake.sentence(),
                         amount=amounts[i], split_type='even',
                         settled_up=False, expense_img=randint(1, 30),
                         creator_id=creators[i]) for i in range(30)]
