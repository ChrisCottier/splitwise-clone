from app.models.friends import Friend
from random import sample

x = set()
while len(x) < 30:
    x.add(tuple(sample(range(30), k=2)))

x = list(x)
seed_friends = [Friend(user1_id=n[0], user2_id=n[1]) for n in x]
