from app.models.images import Image

base_url = 'https://splitwise-clone.s3.us-east-2.amazonaws.com'
landing_page_url = f'{base_url}/landing'
asset_url = f'{landing_page_url}/asset{i}.png'
asset_seeds = [Image(url=asset_url[i], type='asset') for i in range(1, 6)]

print(asset_seeds)
