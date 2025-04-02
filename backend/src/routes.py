from flask_restful import Api
from . import app
from .services import ItemsService, ItemService

api = Api(app)

api.add_resource(ItemsService, "/api/items/")
api.add_resource(ItemService, "/api/items/<int:id>/")

@app.errorhandler(404)
def page_not_found(error):
    return "Page Not Found"