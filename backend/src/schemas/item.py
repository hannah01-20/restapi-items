from .. import ma
from marshmallow import fields

class ItemSchema(ma.Schema):
    id = fields.Integer()
    name = fields.String(required=True)
    price = fields.Float()