from flask_restful import Resource, marshal_with, reqparse
from ..schemas.user import UserCreateSchema
from .. import pwd_context, db
from marshmallow import ValidationError
from ..models import UserModel

request = reqparse.RequestParser()
request.add_argument("username", type=str, required=True)
request.add_argument("email", type=str, required=True)
request.add_argument("password", type=str, required=True)
request.add_argument("re_password", type=str, required=True)

class RegisterService(Resource):
    def post(self):
        data = request.parse_args()
        user_schema = UserCreateSchema()
    
        try:
            new_user = user_schema.load(data)
            db.session.add(new_user)
            db.session.commit()
        except ValidationError as e:
            message = e.messages.get("_schema", ["Error occured"])[0]
            return {"message": message}
            
        return {"message": "User successfully created"}
