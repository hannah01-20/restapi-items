from src.models import db
from src import app

with app.app_context():
    db.create_all()