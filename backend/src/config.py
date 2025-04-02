from dotenv import load_dotenv
import os

load_dotenv()

# development setting
DEBUG = True

# Database
SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_HOST", "sqlite:///db.sqlite3")
