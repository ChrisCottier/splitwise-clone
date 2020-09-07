from app.models.users import User
from random import randint
from . import all_names, emails, hashed_passwords, users

# In order to generate valid User entries, we must follow the
# constraits of the models and the procedurally generated data sets...
# image_ids = range(1, 301)
# users = zip(emails, all_names, hashed_passwords, range(1, 301))
# user_info = set(users)
# print(users)
# print(emails)
# print(all_names)
seed_users = [User(email=user[0], name=user[1],
                   hashed_password=user[2],
                   profile_img=user[3]) for user in users]
