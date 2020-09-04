from app.models.debts import Debt
from app.models.expenses import Expense

seed_debts = Debt(amount=3.50, lender_id=1,
             borrower_id=2, expense_id=Expense.expense.id)
