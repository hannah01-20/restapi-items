from . import api, app
from .services.item import ItemsService, ItemService
from .services.login import LoginService
from .services.user import UserService


api.add_resource(ItemsService, "/api/items/")
api.add_resource(ItemService, "/api/items/<int:id>/")
api.add_resource(LoginService, "/api/login/")
api.add_resource(UserService, "/api/users/")

@app.errorhandler(404)
def page_not_found(error):
    return "Page Not Found"