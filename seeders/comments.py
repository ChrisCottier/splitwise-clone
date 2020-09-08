from app.models.comments import Comment
from random import randint
from . import fake

seed_comments = [Comment(message=fake.paragraph(),
                         user_id=randint(1, 300),
                         expense_id=randint(1, 1500)) for i in range(2000)]
