from app.models.debts import Debt
from app.models.expenses import Expense

debts = Debt(amount=3.50, lender_id=1,
             borrower_id=2, expense_id=Expense.expense.id)
