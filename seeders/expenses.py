from app.models.expenses import Expense
from random import uniform, randint
from . import fake, amounts, creators


seed_expenses = [Expense(title=fake.catch_phrase(), note=fake.sentence(),
                         amount=amounts[i], split_type='even',
                         settled_up=False, creator_id=creators[i]) for i in range(30)]
