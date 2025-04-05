from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_restful import Api
from flask_cors import CORS
from passlib.context import CryptContext
from flask_jwt_extended import JWTManager
from flask_marshmallow import Marshmallow

app = Flask(__name__) # FLASK APP
app.config.from_object('src.config') # CONFIGURATIONS OF THE WEB APP

# Dependencies
db = SQLAlchemy(app)
migrate = Migrate(app, db)
api = Api(app)
cors = CORS(app, resources={r"/api/*": {
    "origins": [
        app.config.get("FRONTEND_URL"),
        "http://localhost:5173",
        ]}})
pwd_context = CryptContext(schemes=["pbkdf2_sha256"], deprecated="auto")
jwt = JWTManager(app)
ma = Marshmallow(app)

@app.route("/")
def index():
    return {"message": "Hello from Items!"}

# IMPORTED TO LET FLASK KNOW THE ARE OTHER ROUTES
from . import routes