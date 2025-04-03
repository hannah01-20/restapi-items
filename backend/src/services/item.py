from .. import db
from flask_restful import Resource, reqparse
from ..models import ItemModel
from ..schemas.item import ItemSchema
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask import request

parser = reqparse.RequestParser()
parser.add_argument("name", type=str, required=True, help="Name should consist of alphabets and atleast 3 characters")
parser.add_argument("price", type=float, required=True, help="Price shoub be a positive number")


class ItemsService(Resource):
    method_decorators=[jwt_required()]
    def get(self):
        user_id = get_jwt_identity()
        items = ItemModel.query.filter_by(user_id=user_id)
        schema = ItemSchema()
        items_json = schema.dump(items, many=True)
        return items_json
    
    def post(self):
        data = parser.parse_args()
        user_id = get_jwt_identity()
        data["user_id"] = user_id
    
        schema = ItemSchema()
        new_item = schema.load(data)

        db.session.add(new_item)
        db.session.commit()

        items = ItemModel.query.filter_by(user_id=user_id)
        items_json = schema.dump(items, many=True)
        return items_json

class ItemService(Resource):
    method_decorators=[jwt_required()]
    def get(self, id):
        user_id = get_jwt_identity()
        item = ItemModel.query.get_or_404(id, "Item not found")
        schema = ItemSchema()

        if user_id is not item.user_id:
            return {"msg": "Not authorized"}, 401
        return schema.dump(item)
    
    def put(self, id):
        data = parser.parse_args()
        user_id = get_jwt_identity()
        item = ItemModel.query.filter_by(id=id).first()
    
        if user_id is not item.user_id:
            return {"msg": "Not authorized"}, 401
        
        data["id"] = id
        data["user_id"] = user_id
        schema = ItemSchema()
        schema.load(data, partial=True)

        db.session.commit()
        schema = ItemSchema()
        items = ItemModel.query.filter_by(user_id=user_id)
        return schema.dump(items, many=True)
    
    def delete(self, id):
        item = ItemModel.query.get_or_404(id, "Item not found")
        user_id = get_jwt_identity()

        if user_id is not item.user_id:
            return {"msg": "Not authorized"}, 401
        
        db.session.delete(item)
        db.session.commit()

        schema = ItemSchema()
        items = ItemModel.query.filter_by(user_id=user_id)
        return schema.dump(items)