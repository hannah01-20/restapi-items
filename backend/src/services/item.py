"""
HANDLE BUSINESS LOGIC FOR ITEMS
"""

from .. import db
from flask_restful import Resource, reqparse
from ..models import ItemModel
from ..schemas.item import ItemSchema
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask import request

# DEFINE HOW REQUEST DATA SHOULD HAVE
parser = reqparse.RequestParser()
parser.add_argument("name", type=str, required=True, help="Name should consist of alphabets and atleast 3 characters")
parser.add_argument("price", type=float, required=True, help="Price shoub be a positive number")

# JWT REQUIRED, USER NEED TO BE AUTHENTICATED
class ItemsService(Resource):
    method_decorators=[jwt_required()]
    def get(self):
        """
        GET USER ID AND GET USER'S ITEMS, 
        DESERIALIZED ITEMS CONVERTED TO JSON
        """
        user_id = get_jwt_identity()
        items = ItemModel.query.filter_by(user_id=user_id)
        schema = ItemSchema()
        items_json = schema.dump(items, many=True)
        return items_json
    
    def post(self):
        """
        GET REQUEST DATA AND USER ID TO ADD TO DATA VALIDATION,
        ADD ITEM TO DATABASE AND COMMIT,
        RETURN USER'S ITEMS
        """
        data = parser.parse_args()
        user_id = get_jwt_identity()
        data["user_id"] = user_id
    
        schema = ItemSchema()
        new_item = schema.load(data) # VALIDATES

        db.session.add(new_item)
        db.session.commit()

        items = ItemModel.query.filter_by(user_id=user_id)
        items_json = schema.dump(items, many=True)
        return items_json

# JWT REQUIRED, USER NEED TO BE AUTHENTICATED
class ItemService(Resource):
    method_decorators=[jwt_required()]
    def get(self, id):
        """ 
        GET USER ITEM BY ID,
        CHECK IF THE ITEM IS USER'S,
        RETURN ITEM
        """
        user_id = get_jwt_identity()
        item = ItemModel.query.get_or_404(id, "Item not found")
        schema = ItemSchema()

        if user_id is not item.user_id:
            return {"msg": "Not authorized"}, 401
        return schema.dump(item)
    
    def put(self, id):
        """
        GET REQUEST DATA AND USER ID,
        GET ITEM FROM DATABASE, CHECK IF ITEM IS USER'S
        VALIDATE ITEM, DAVE TO DATABASE,
        RETURN USER'S ITEMS
        """
        data = parser.parse_args()
        user_id = get_jwt_identity()
        item = ItemModel.query.filter_by(id=id).first()
    
        if user_id is not item.user_id:
            return {"msg": "Not authorized"}, 401
        
        data["id"] = id
        data["user_id"] = user_id
        schema = ItemSchema()
        schema.load(data, partial=True) # VALIDATE

        db.session.commit()
        schema = ItemSchema()
        items = ItemModel.query.filter_by(user_id=user_id)
        return schema.dump(items, many=True)
    
    def delete(self, id):
        """
        GET USER ID, GET ITEM, CHECK IF ITEM IS USER'S,
        DELETE ITEM
        """
        item = ItemModel.query.get_or_404(id, "Item not found")
        user_id = get_jwt_identity()

        if user_id is not item.user_id:
            return {"msg": "Not authorized"}, 401
        
        db.session.delete(item)
        db.session.commit()

        schema = ItemSchema()
        items = ItemModel.query.filter_by(user_id=user_id)
        return schema.dump(items)