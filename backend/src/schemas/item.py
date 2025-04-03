from .. import ma
from marshmallow import fields, validate
from ..models import ItemModel

class ItemSchema(ma.SQLAlchemyAutoSchema):
    id = fields.Integer()
    name = fields.String(required=True, validate=[validate.Length(min=3)], error_messages={
        "required": "Name is required",
        "invalid": "Name should be atleast 3 characters"
    })
    price = fields.Float(required=True, validate=[validate.Range(min=0)])
    user_id = fields.Integer()

    class Meta:
        model = ItemModel
        load_instance = True