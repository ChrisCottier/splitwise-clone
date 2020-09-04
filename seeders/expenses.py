from app.models.expenses import Expense
from random import uniform
from . import fake

titles = [fake.catch_phrase() for i in range(30)]
amounts = [format(uniform(5, 100), '.2f') for i in range(30)]
print(titles)
print(amounts)
seed_expenses = Expense(title='sample', note='sample note', amount=234,
                        split_type='even', settled_up=False, creator_id=1)
