from app.models.debts import Debt
from random import randint
from . import amounts, creators, borrowers

# for i in range(5):

seed_debts = [Debt(amount=amounts[i], lender_id=creators[i],
                   borrower_id=borrowers[i], expense_id=(i+1)) for i in range(1500)]

# seed_debts = seed_debts + [Debt(amount=amounts[i], lender_id=creators[i],
#                                 borrower_id=borrowers[i], expense_id=(i+1)) for i in range(300, 600)]

# seed_debts = seed_debts + [Debt(amount=amounts[i], lender_id=creators[i],
#                                 borrower_id=borrowers[i], expense_id=(i+1)) for i in range(600, 900)]

# seed_debts = seed_debts + [Debt(amount=amounts[i], lender_id=creators[i],
#                                 borrower_id=borrowers[i], expense_id=(i+1)) for i in range(900, 1500)]
# seed_debts = seed_debts + [Debt(amount=amounts[i], lender_id=creators[i],
#                                 borrower_id=borrowers[i], expense_id=(i+1)) for i in range(600, 900)]
