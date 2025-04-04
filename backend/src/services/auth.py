from ..models import UserModel
from flask_restful import Resource, reqparse
from .. import pwd_context
from flask_jwt_extended import create_access_token, create_refresh_token, get_jwt, jwt_required
from ..blocklist import BLOCKLIST



request = reqparse.RequestParser()
request.add_argument("username", type=str, required=True, help="Username is required")
request.add_argument("password", type=str, required=True, help="Password is required")

class LoginService(Resource):
    def post(self):
        data = request.parse_args()  
        user = UserModel.query.filter_by(username=data.username).first()

        if not user or not pwd_context.verify(data.password, user.password):
            return {"message": "Invalid credentials"}, 401
        
        access_token = create_access_token(identity=user.id)
        refresh_token = create_refresh_token(identity=user.id)

        return {"access": access_token, "refresh": refresh_token}, 200
    
# token_parser = reqparse.RequestParser()
# token_parser.add_argument("access", type=str, required=True, help="Access token is required")
# token_parser.add_argument("refresh", type=str, required=True, help="Resfresh token is required")

class LogoutService(Resource):
    @jwt_required()
    def post(self):
        jti = get_jwt()["jti"]
        BLOCKLIST.add('jti')
        return {"message": "Successfully logged out"}, 200