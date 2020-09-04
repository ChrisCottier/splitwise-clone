from app.models.friends import Friend
from . import friends

seed_friends = [Friend(user1_id=friend[0],
                       user2_id=friend[1]) for friend in friends]
