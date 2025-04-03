from .. import ma, pwd_context
from marshmallow import fields, validates_schema, validate, ValidationError

class RegisterSchema(ma.Schema):
    username = fields.String(required=True, validate=validate.Length(min=8))
    email = fields.Email(required=True)
    password = fields.String(required=True, load_only=True)
    re_password = fields.String(required=True, load_only=True)

    def validate_password(self, data, **kwargs):
        if data["password"] == data["re_password"]:
            raise ValidationError("Password and confirm password do not match")
        