from src.models import UserModel
from flask_jwt_extended.exceptions import NoAuthorizationError
import pytest
# test if request "/" will return None
def test_index(client):
    response = client.get("/")

    assert b"" in response.data

# test if request "/api" will return None
def test_api(client):
    response = client.get("/api")

    assert b"" in response.data

# test can register user
def test_register(client, app):
    response = client.post("/api/register/", json={"username": "pytesting", "email": "pytesting@email.com", "password": "password123", "re_password": "password123"})
    assert response.status_code == 200
    assert response.get_json() == {"message": "User successfully created"}
    with app.app_context():
        assert UserModel.query.filter_by(username="testify")

# Get items without authentication
# test get items when not authenticated
def test_items(client):
    response = client.get("/api/items/")

    assert response.status_code == 401
    assert response.get_json() == {"msg": "Missing Authorization Header"}

