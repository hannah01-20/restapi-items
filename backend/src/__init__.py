from flask import Flask

app = Flask(__name__)
app.config.from_object('src.config')

@app.route("/")
def index():
    return {"message": "Hello from Items!"}

from . import routes