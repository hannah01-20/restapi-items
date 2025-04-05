""" 
GENERATES SQLITE DATABASE WITH USERS AND ITEMS TABLE 
BASED ON MODELS THAT ARE CREATED
"""

from src import app, db

with app.app_context():
    db.create_all()
