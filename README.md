# my-budget
Simple web app for managing personal finances

## Setup:
#### Back end
1. Enter `$PROJECT_PATH/server`
2. (optional) Create and activate virtualenv with Python3.6
3. Run `pip install -r requirements/base.txt`
   or `pip install -r requirements/development.txt` for developer's environment.
4. Run `python manage.py migrate`
5. Run `python manage.py createsuperuser`
6. Run `python manage.py runserver`
7. Visit `localhost:8000/api/` to see the api endpoints as a superuser.

### Front end
1. Enter `$PROJECT_PATH/client`
2. Run `npm i`
3. Run `npm start`
4. Visit `localhost:3000` and log in.
