""" WEB APP ROUTES"""

from . import api, app
from .services.item import ItemsService, ItemService
from .services.auth import LoginService, LogoutService
from .services.user import UserService

# RESTAPI ROUTES
api.add_resource(ItemsService, "/api/items/") # GET, POST
api.add_resource(ItemService, "/api/items/<int:id>/") # GET, PUT, DELETE
api.add_resource(LoginService, "/api/login/") # POST
api.add_resource(LogoutService, "/api/logout/") # POST
api.add_resource(UserService, "/api/users/") # GET, POST

# RETURN 404 WHEN HE REQUESTED ROUTE IS NOT EXISTED
@app.errorhandler(404)
def page_not_found(error):
    return "Page Not Found"