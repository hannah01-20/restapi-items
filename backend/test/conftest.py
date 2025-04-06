import pytest
from src import app as test_app, db
@pytest.fixture()
def app():
    test_app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///:test.sqlite3"
    test_app.config["TESTING"] = True

    with test_app.app_context():
        db.create_all()
    
    yield test_app

@pytest.fixture()
def client(app):
    return test_app.test_client()