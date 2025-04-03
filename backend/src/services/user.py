from flask_restful import Resource, reqparse
from marshmallow import ValidationError
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended.view_decorators import jwt_required
from ..models import UserModel
from ..schemas.user import UserSchema, UserCreateSchema
from .. import db

request = reqparse.RequestParser()
request.add_argument("username", type=str, required=True)
request.add_argument("email", type=str, required=True)
request.add_argument("password", type=str, required=True)
request.add_argument("re_password", type=str, required=True)
class UserService(Resource):
    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()
        user = UserModel.query.filter_by(id=user_id).first()
        schema = UserSchema()
        
        return schema.dump(user)
    
    def post(self):
        data = request.parse_args()
        user_schema = UserCreateSchema()
    
        try:
            new_user = user_schema.load(data)
            db.session.add(new_user)
            db.session.commit()
        except ValidationError as e:
            message = e.messages.get("_schema", ["Error occured"])[0]
            return {"message": message}, 401
            
        return {"message": "User successfully created"}