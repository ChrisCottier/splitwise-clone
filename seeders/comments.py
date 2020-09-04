from app.models.comments import Comment

seed_comments = [
    Comment(message="I've already paid my portion",
            user_id='1', expense_id='1'),
    Comment(message="I've will not pay portion", user_id='2', expense_id='1'),
    Comment(message="When do we leave", user_id='3', expense_id='1'),
    Comment(message="Can you call me?", user_id='4', expense_id='1'),
    Comment(message="When do you need the cash by?",
            user_id='5', expense_id='1'),
    Comment(message="Can't wait", user_id='6', expense_id='1'),
    Comment(message="Hello", user_id='7', expense_id='1'),
]
