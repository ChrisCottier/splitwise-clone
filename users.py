from app.models.users import User
from random import randint
from seeders import all_names, emails, hashed_passwords, users

# In order to generate valid User entries, we must follow the
# constraits of the models and the procedurally generated data sets...
# image_ids = range(1, 301)
# users = zip(emails, all_names, hashed_passwords, range(1, 301))
print(users)
# user_info = set(users)
# print(user_info)
# seed_users = [User(email=email, name=name,
#                    hashed_password=password,
#                    profile_img=image_id) for name in all_names]
