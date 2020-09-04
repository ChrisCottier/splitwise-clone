from app.models.users import User

names = []
for i in range(1, 31):
    names.append(f'test{i}')

seed_users = [User(email=f'{name}@test.test', name=f'{name}',
                   hashed_password='$2b$14$eSoF0LBQoIgAdcfL5eTzDO95Tk1l3N7/JUhYJJq9A/D7GyufoA2Ai')
              for name in names]
