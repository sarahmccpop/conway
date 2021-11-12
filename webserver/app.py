from flask import Flask, jsonify, render_template
from flask_cors import CORS
import csv

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

# note! when running this with flask, the csv needed the route directory in front of it for flask to run
# didn't need this in readingcsv.py when run locally in terminal 
file = open('webserver/employeedata.csv')
type(file)
csvreader = csv.reader(file)
header = []
header = next(csvreader) #gets the column titles so these aren't included 
rows = []
for row in csvreader:
    rows.append(row)

#print(rows) 
 
@app.route("/template-test")
@app.route("/template-test/<name>")
def template_test(name="Andy"):
    return render_template("hello.html", name=name, users=users)

@app.route("/sarahs-page")
def sarahs_page():
    return render_template("employees.html", rows=rows)

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

file.close()  

