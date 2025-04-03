import pytest
from src import app as test_app, db
@pytest.fixture()
def app():
    test_app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///:memory"
    test_app.config["TESTING"] = True

    with test_app.app_context():
        db.create_all()
    
    yield test_app

    with test_app.app_context():
        db.drop_all()

@pytest.fixture()
def client(app):
    return app.test_client()