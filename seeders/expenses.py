from app.models.expenses import Expense

expense = Expense(title='sample', note='sample note', amount=234,
                  split_type='even', settled_up=False, creator_id=1)
