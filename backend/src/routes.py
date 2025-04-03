from . import api, app
from .services.item import ItemsService, ItemService
from .services.register import RegisterService


api.add_resource(ItemsService, "/api/items/")
api.add_resource(ItemService, "/api/items/<int:id>/")
api.add_resource(RegisterService, "/api/register/")

@app.errorhandler(404)
def page_not_found(error):
    return "Page Not Found"