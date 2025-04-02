from flask_restful import Resource, marshal_with
from .models import db, ItemModel
from .validate import item_validate, item_fields

class ItemsService(Resource):
    method_decorators=[marshal_with(item_fields)]

    def get(self):
        items = ItemModel.query.all()
        return items
    
    def post(self):
        request = item_validate.parse_args()
        new_item = ItemModel(name=request["name"], price=request["price"])

        db.session.add(new_item)
        db.session.commit()

        all_items = ItemModel.query.all()
        return all_items

class ItemService(Resource):
    method_decorators=[marshal_with(item_fields)]

    def get(self, id):
        item = ItemModel.query.get_or_404(id, "Item not found")
        return item
    
    def put(self, id):
        request = item_validate.parse_args()
        item = ItemModel.query.get_or_404(id, "Item not found")

        item.name = request["name"]
        item.price = request["price"]

        db.session.commit()
        all_items = ItemModel.query.all()
        return all_items
    
    def delete(self, id):
        item = ItemModel.query.get_or_404(id, "Item not found")
        
        db.session.delete(item)
        db.session.commit()

        all_items = ItemModel.query.all()
        return all_items