from app.models.expenses import Expense

seed_expenses = Expense(title='sample', note='sample note', amount=234,
                        split_type='even', settled_up=False, creator_id=1)
