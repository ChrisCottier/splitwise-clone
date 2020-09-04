from app.models.transactions import Transaction
from . import payments, creators, borrowers

seed_transactions = [Transaction(amount=payments[i], reciever_id=creators[i],
                                 sender_id=borrowers[i], debt_id=i,
                                 expense_id=i) for i in range(30)]
