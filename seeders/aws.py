from app.models.images import Image

base_url = 'https://splitwise-clone.s3.us-east-2.amazonaws.com'
landing_page_url = f'{base_url}/landing'
male_url = f'{base_url}/profile/male'
female_url = f'{base_url}/profile/female'

phone_seeds = [Image(
    url=f'{landing_page_url}/asset{i}.png'.format(i), type='asset') for i in range(1, 6)]

logo_seeds = [Image(url=f'{landing_page_url}/logo-horizontal.png', type='asset'),
              Image(url=f'{landing_page_url}/logo-square.png',
                    type='asset')]

male_img_seeds = [Image()] # male images start at 150 and run until 249
female_img_seeds = [Image()] #
asset_seeds = [logo_seeds + phone_seeds]
