from faker import Faker
from random import uniform, randint, sample

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
all_names = [male_names + female_names]
# this sets up unique pairs of friends such that we will avoid duplicate sets of frinds in the database
friends = set()
while len(friends) < 30:
    friends.add(tuple(sample(range(1, 31), k=2)))

friends = list(friends)
