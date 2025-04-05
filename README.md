# restapi-items
Rest API web application for my technical exam.
Flask, React.js, Azure MySQL (Deployment), and SQLite (Development)

### Frontend
React 19.0.0 

TypeScript - A devtool for safe typing.

UI:
I used Shadcn , a react component library that can be customized, I used this to speed up the UI building process, together with other packages: 
- React Hot Toast for user notification.
- React Spinners, loading indication.
- Tailwindcss for css styling.

Router:
I used TanStack-router to manage routes and block users from accessing certain routes when they're not authenticated.

Frontend endpoints:
- /
- /login/
- /register/
- /item/$id/
- /create-item/

Note: 
    Since I am using github pages for frontend deployment it serves at: 

    https://hannah01-20.github.io/restapi-items/

    then you reload or access the other routes directly to url like:

    https://hannah01-20.github.io/restapi-items/login/
    
    this will break the page and you will get 404 File not Found.

Fetching:
I used axios, a fetching library.

#### Run in local
Development mode
- `cd frontend`
- `npm install`
- `npm run dev`

If you want to run in production mode
- `npm run build`
- `npm run preview`

### Backend
Required: Python 3.11.1
For this backend I used Flask, a web framework in python that can handle APIs, services, and database interaction.
Together with other library extensions:
- flask restful for RestAPI.
- flask jwt extension for JWT authentication.
- flask sqlalchemy for Database connection.
- flask cors for Cross Origin Resource Sharing and security purposes.
- flask migrate to track the changes in models and apply these changes to database.

Features:
- CRUD on items
- JWT Authentication (Register, Login, and Logout)

The backend has the following endpoints:
- GET, POST /api/items/
- GET, PUT, DELETE /api/items/< id >/
- GET, POST /api/users/
- POST /api/login/
- POST /api/logout/

The /api/items/ and /api/items/< id > endpoints can only be access when authenticated,
if you wanted to access it please procceed to log in to get the access token, and put it in request header Authorization, like this:

Authorization: Bearer < access_token >

Reminder: access_token expires in 5 minutes, if it did just login in again to get a new one

#### Run in local
It's recommended to have a virtual environment on to manage dependencies.

Run in CMD
- `cd backend`
- `pip install -r requirements.txt`
- `python app.py`

For database, I only use SQLite3 however, in deployment I used Azure MySQL.
please execute this command to generate SQLite3 and create items and users table.
- `python db.py` Reminder you need to be inside of backend directory.

If you ever want to make changes to models and wanted these changes reflected to SQLite3 database, run these commands.
- `flask db init` To initialize migrations
- `flask db migrate -m "your message"` to make migrations
- `flask db upgrade` to apply the changes to database

#### Test unit
As of the moment, unit testing is not done yet.
To run unit tests:
- From backend directory `cd test`
- `pytest`