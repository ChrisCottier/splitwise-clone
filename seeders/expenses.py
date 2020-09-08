from app.models.expenses import Expense
from random import uniform, randint
from . import fake, amounts, creators, expense_titles
# fake.bs()
# fake.catch_phrase()
# seed_expenses = []
# for i in range(5):
seed_expenses = [Expense(title=expense_titles[i], note=fake.sentence(),
                         amount=amounts[i], split_type='even',
                         settled_up=False, expense_img=randint(1, 300),
                         creator_id=creators[i]) for i in range(1500)]
