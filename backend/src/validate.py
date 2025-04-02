from flask_restful import reqparse, fields
from .models import ItemModel

def validate_name(name):
    if type(name) != str:
        raise ValueError("Name should be characters")
    
    if len(name) == 0:
        raise ValueError("Name should not be empty")
    
    return name

def validate_price(value):
    try:
        value = float(value)
    except ValueError:
        raise ValueError("Price should be a valid number")
    
    if value < 0:
        raise ValueError("Price should be a positive number")
    
    return value

item_validate = reqparse.RequestParser()
item_validate.add_argument("name", type=validate_name, required=True)
item_validate.add_argument("price", type=validate_price, required=True)

item_fields = {
    "id": fields.Integer,
    "name": fields.String,
    "price": fields.Float
}