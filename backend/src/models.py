from . import app
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy(app)

class ItemModel(db.Model):
    __tablename__ = "items"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)

    def __repr__(self):
        return f"Id: {self.id} - Name: {self.name} - Price: {self.price}"