# restapi-items
Rest API web application for my technical exam.
Flask, React.js, and SQLite (development)

### Backend
Required: Python 3.11.1
Features:
    - CRUD on items
    - Authentication (JWT)

The backend has the following endpoints:
- GET, POST /api/items/
- GET, PUT, DELETE /api/items/<id>/
- POST /api/register/
- POST /api/login/

The /api/items/ and /api/items/<id> endpoints can only be access when authenticated,
if you wanted to access it please procceed to log in to get the access token, and put it in request header Authorization, like this:

Authorization: Bearer <access_token>

reminder: access_token expires in 5 minutes, if it did just login in again to get a new one

#### Run in local
It's recommended to have a virtual environment on to manage dependencies.

Run in CMD
- `cd backend`
- `pip install -r requirements.txt`
- `python app.py`

For database, I only use SQLite3
please execute this command to generate SQLite3 ande create items and users table
- `python db.py` Reminder you need to be inside of backend directory.

If you ever want to make changes to models and wanted these changes reflected to SQLite3 database, run these commands.
- `flask db init` To initialize migrations
- `flask db migrate -m "your message"` to make migrations
-`flask db upgrade` to apply the changes to database