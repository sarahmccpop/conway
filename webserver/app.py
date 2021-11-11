from flask import Flask, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/foo")
def foo():

    return "<h1>Baz!</h1>"

@app.route("/sarah")
def sarah():
    return "<h1>Hi Sarah </h1>"    

@app.route("/double/<my_number>")
def double(my_number):

    return f"Your number is {my_number}"


@app.route("/users/<int:user_id>/charge/<int:amount>/")
def charge_user(user_id, amount):

    return f"I am charging user {user_id} {amount} pounds."

    return "I am charging user {user} {amt}".format(user=user_id, amt=amount)

    return "I am charging user %s %s pounds." % user_id, amount

    return "I am charging user" + str(user_id) + " " + str(amount) + " pounds"

# To run flask, it's basically just this
# FLASK_ENV=development FLASK_APP=webserver.app python -m flask run

users = {
    1: {"name": "Alice", "job": "Doctor"},
    2: {"name": "Bob", "job": "Fireman"},
    3: {"name": "Claire", "job": "Police"},
    4: {"name": "Dave", "job": "Greengrocer"},
    5: {"name": "Emily", "job": "Helicopter Pilot"},
}

@app.route("/template-test")
@app.route("/template-test/<name>")
def template_test(name="Andy"):
    return render_template("hello.html", name=name, users=users)



# get just a user
@app.route("/user/<int:user_id>")
def get_user(user_id):

    user = users[user_id]

    return jsonify(user)    

# get just a users job
@app.route("/user/<int:user_id>/job")
def get_user_job(user_id):

    user = users[user_id]

    job = user["job"]

    return job

    try:
        user = users[user_id]
    except KeyError:
        return jsonify("That user doesn't exist"), 404    
        
    try:
        key = user[key]
    except KeyError:
        return jsonify(f"We don't have a detail called '{key}'"), 400

    return jsonify(key)    