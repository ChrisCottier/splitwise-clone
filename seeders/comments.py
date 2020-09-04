from app.models.comments import Comment
from random import randint
from . import fake

seed_comments = [Comment(message=fake.paragraph(),
                         user_id=randint(1, 30),
                         expense_id=randint(1, 30)) for i in range(60)]
