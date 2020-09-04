from app.models.images import Image
from random import randint
from . import fake, types

seed_images = [Image(url=fake.image_url(), type=types[randint(0, 1)])
               for i in range(30)]
