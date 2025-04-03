from .. import ma
from marshmallow import fields, validate, validates_schema, ValidationError
from ..models import UserModel

class UserSchema(ma.SQLAlchemyAutoSchema):
    username = fields.String(required=True, validate=[validate.Length(min=4)], error_messages={
        "required": "Username is required",
        "invalid": "Username is invalid, must include characters"
    })

    email = fields.Email(required=True, validate=[validate.Email()])

    @validates_schema
    def valid_username_and_email(self, data, **kwargs):
        email_is_taken = UserModel.query.filter_by(email=data["email"]).first()
        username_is_taken = UserModel.query.filter_by(username=data["username"]).first()
        if email_is_taken:
            raise ValidationError("Email is already taken")
        if username_is_taken:
            raise ValidationError("Username is already taken")

    class Meta:
        model = UserModel
        load_instance = True
        exclude = ["id", "_password"]

class UserCreateSchema(UserSchema):
    password = fields.String(required=True, validate=[validate.Length(min=8)], error_messages={
        "required": "Password is required",
        "invalid": "Password should be atleast 8 character"
    })
    re_password = fields.String(required=True, error_messages={
        "required": "Confirm password is required"
    })

    @validates_schema
    def validate_password(self, data, **kwargs):
        if data["password"] != data["re_password"]:
            raise ValidationError("Password and confirm password are not matched")
    