from faker import Faker
from random import uniform, randint, sample
import bcrypt

fake = Faker()
# fake data for use across multiple files which should only run once and feed the rest of the script for consistency sake.
amounts = [format(uniform(5, 100), '.2f') for i in range(30)]
creators = [randint(1, 30) for i in range(30)]
borrowers = [randint(1, 30) for i in range(30)]
payments = [format(uniform(2.5, 30), '.2f') for i in range(30)]
types = ['profile', 'expense']
# names will be generated here for a similar reason
male_names = [fake.name_male() for i in range(150)]
female_names = [fake.name_female() for i in range(150)]
# indicies 0-149 are female names, 150-299 are male names
all_names = female_names + male_names
# this sets up unique pairs of friends such that we will avoid duplicate sets of frinds in the database
friends = set()  # a set will never allow duplicate values so we iterate until we have enough
while len(friends) < 2500:  # This will create 2500 unique friend associations
    friends.add(tuple(sample(range(1, 301), k=2)))

friends = list(friends)
# since the database constraint on emails is unique, the must be generated in a similar fashion
emails = set()  # a set will never allow duplicate values so we iterate until we have enough
while len(emails) < 300:  # This will create 300 unique email addresses
    emails.add(fake.email())

emails = list(emails)
hashed_passwords = [bcrypt.hashpw(fake.password(length=4).encode(), bcrypt.gensalt(
    4)).decode('utf-8') for i in range(300)]
users = [('email', email) for email in emails]
# users = list(zip(emails, all_names, hashed_passwords, range(1, 301)))
# users = list({'email': emails, 'name': all_names})

