from app.models.images import Image

base_url = 'https://splitwise-clone.s3.us-east-2.amazonaws.com'
landing_page_url = f'{base_url}/landing'
male_url = f'{base_url}/profile/male'
female_url = f'{base_url}/profile/female'

landing_page_seeds = [Image(
    url=f'{landing_page_url}/asset{i}.png'.format(i), type='asset') for i in range(1, 6)]

logo_seeds = [Image(url=f'{landing_page_url}/logo-horizontal.png', type='asset'),
              Image(url=f'{landing_page_url}/logo-square.png',
                    type='asset')]

female_img_seeds = [Image(
    url=f'{female_url}/profile_photo_{i}.png', type='profile') for i in range(0, 150)]  # inidicies 0-149
male_img_seeds = [Image(url=f'{male_url}/profile_photo_{i}.png', type='profile')
                  for i in range(150, 300)]  # male images start at 150 and run until 299

asset_seeds = [logo_seeds + landing_page_seeds]
user_img_seeds = female_img_seeds + male_img_seeds
