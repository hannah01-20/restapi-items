from dotenv import load_dotenv
import os

load_dotenv()

# development setting
DEBUG = os.getenv("DEBUG_MODE", False)
SECRET_KEY = os.getenv("SECRET_KEY", "hashvrdascvfhtaajhgfvsdva56678nnnn345nhhsdffhhsdgweghhhh34t3rgver")

# Database
SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_HOST", "sqlite:///db.sqlite3")

# CORS
FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:5173")

# JWT
JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "7f907b7520997c0b8a0f3163f620382ee45690043958a85e2f9a8391983ead1a")
JWT_TOKEN_LOCATION = ["headers"]
JWT_IDENTITY_CLAIM = "user_id" # sub