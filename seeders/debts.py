from app.models.debts import Debt
from random import randint
from . import amounts, creators, borrowers

seed_debts = [Debt(amount=amounts[i], lender_id=creators[i],
                   borrower_id=borrowers[i], expense_id=(i+1)) for i in range(30)]
