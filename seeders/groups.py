from app.models.groups import Group
from random import sample
from . import fake

x = set()
while len(x) < 1000:
    x.add(tuple(sample(range(1, 301), k=6)))

x = list(x)
groups = [fake.company() for i in range(1000)]
print(groups)
for n in x:
    group = list(n)
    group.insert(0, groups.pop(0))
    groups.append(group)

seed_groups = [Group(name=f'{group[0]}', user1_id=group[1], user2_id=group[2], user3_id=group[3],
                     user4_id=group[4], user5_id=group[5], user6_id=group[6])for group in groups]
