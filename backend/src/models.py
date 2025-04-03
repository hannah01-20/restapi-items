from . import db, pwd_context
from sqlalchemy.ext.hybrid import hybrid_property

class UserModel(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    _password = db.Column("password", db.String(250), nullable=False)
    items = db.relationship("ItemModel", backref="owner", lazy="select")

    @hybrid_property
    def password(self):
        return self._password
    
    @password.setter
    def password(self, value):
        self._password = pwd_context.hash(value)


class ItemModel(db.Model):
    __tablename__ = "items"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id", name="fk_user_id" , ondelete="CASCADE"), nullable=False)

    def __repr__(self):
        return f"Id: {self.id} - Name: {self.name} - Price: {self.price}"