from src import db, app
from src.models import ItemModel, UserModel


with app.app_context():
    items = ItemModel.query.all()    
    users = ItemModel.query.all()
    if not items and not users:
        item1 = ItemModel(name="bag", price=450)
        item2 = ItemModel(name="watch", price=145)
        item3 = ItemModel(name="cellphone", price=22000)

        db.session.add_all([item1, item2, item3])
        db.session.commit()