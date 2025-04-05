""" WEB APP'S CONFIGURATIONS AND SETTINGS """

from dotenv import load_dotenv
import os

load_dotenv()

# development setting
DEBUG = os.getenv("DEBUG_MODE", True)
SECRET_KEY = os.getenv("SECRET_KEY", "your_secret_key_rest_api_items")

# Database
SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL", "sqlite:///db.sqlite3")

# CORS
FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:5173")

# JWT
JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "your_jwt_secret_key")
JWT_TOKEN_LOCATION = ["headers"]
JWT_IDENTITY_CLAIM = "user_id" # sub