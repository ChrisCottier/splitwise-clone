import bcrypt
# from . import fake, demo_password
from random import randint
from app.models.friends import Friend
from app.models.expenses import Expense
from app.models.comments import Comment
from app.models.users import User
# demo_user = [User(email='DemoUserEmail@demo.com', name="DemoUser",
#                   hashed_password=demo_password, profile_img=301)]
# # demo_user_comments = [
#     Comment(message=fake.paragraph(), user_id=301, expense_id=randint(1, 1500))for i in range(50)]
# demo_user_expenses = [Expense()]
