from app.models.images import Image
from random import randint
from . import fake, types

seed_images = [Image(url=fake.image_url(), type=types[randint(0, 1)])
               for i in range(30)]

demo_user_img = [Image(url='https://splitwise-clone.s3.us-east-2.amazonaws.com/profile/demo/demo_user.jpg', type='profile')]
