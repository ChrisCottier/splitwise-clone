from faker import Faker
from random import uniform, randint, sample

fake = Faker()

amounts = [format(uniform(5, 100), '.2f') for i in range(30)]
creators = [randint(1, 30) for i in range(30)]
borrowers = [randint(1, 30) for i in range(30)]
payments = [map(lambda amount: amount/2, amounts) for amount in amounts]

friends = set()
while len(friends) < 30:
    friends.add(tuple(sample(range(30), k=2)))

friends = list(friends)
