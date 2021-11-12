# How I got to this point

I opened a terminal window and used `cd ~` to ensure I was in my home directory. 

I used `nvm ls` to check which versions of node version manager were already installed. 

I used `nvm install --lts node` to install the most recent version of node that has the latest long term support. 

Once again I used `cd ~` to ensure I was in home directory (could also have used `pwd`). 

I then used `create-react-app conway` to create a new react app in a directory called conway. 

I used `cd conway` to change directory into conway. 

I used `npm start` to start the web server. This launched a tab in my chrome browser which was web address  `localhost:3000`. 

From here I couldn't run any further command lines, so I opened another tab in terminal to continue. This tab opened in the conway directory. 

The live terminal window had suggested running `npm run build` so (once in conway) I ran this command. 

I then used `ls` to confirm the presence of a `src` directory. I used `cd src` to change directory into src. 

I used `ls` again to confirm presence of App.js file in src folder. 

I used `nano App.js` to edit the App.js file. I found a line which contained `Edit <code>src/App.js</code> and save to reload.`. I removed this text and changed it to I am great. Thanks Andrew :)

I used control & X to open the option for save in nano and responded `Y` to save. I refreshed `localhost:3000` and the edited message appeared onscreen. 

On my internet browser, I opened github and completed the following steps -> 
* clicked the "home" octocat icon in the top left to get to the homepage
* clicked plus icon in top right of screen and click New repository
* entered the name "conway"
* left description blank
* selected "public"
* didn't tick any of the three boxes for adding a README, gitignore or license.
* clicked  Create repository 

On my terminal, I used `pwd` to ensure I was in the conway directory. 

I ran `git remote add origin git@github.com:sarahmccpop/conway.git`

I ran `git branch -M main` to ensure it was the main branch

I ran `git push -u origin main`

I used `nano README.md` to open this file. I typed in this 'How I got to...' and will save and push it to github, hoping it's formatted well. 

## Update Thursday 28th Oct 

Created React componenets in .jsx files. Each component had `export` before it and were declared as `const`. Next was the component name in camel case. Then `props` were passed to the component and either named in the parameter or also within the component body. A return statement was used to complete the components. 

To use the features of date-fns within the .jsx files `import * as dateFns from 'date-fns';` was written at the start of the relevant .jsx file. 

Within the `App.js` file, the components were imported with a command like `import {ComponentName} from './ComponentName';`

Within the `return` function of `App.js` the component was enabled by declaring the ComponentName between < > e.g. `<ComponentName>` and also parameter details could be set within the ` < >` too. Whatever the component was coded to return would then appear on localhost:3000.

## Update Wednesday 10th November 

Today I was adding a button to show or hide the Conway board. I added a boolean variable within `useConway` in `Conway.jsx`. I set the state to true. Code: `const [showConway, setShowConway] = useState(true)`

I then created a function to toggle the value of `showConway` to either true or false by setting `setShowConway`. The code for that was : `const toggleShowConway = () => {
        setShowConway(!showConway)
        console.log("State of showConway:" + showConway)
    }`

The console would log either true or false depending on the value of showConway. 

I added `showConway` and `toggleShowConway` to the `return` statement of `useConway`. 

Within `App.js` I added ` <button onClick={conwayState.toggleShowConway}>{conwayState.showConway ? "Hide" : "Show"}</button>` to create a button which could hide or reveal the board. When pressed this button also logs the state of `showConway`. I initially had the button text set as Reveal however Andrew showed me how to change the state of the button depending on value of the variable using the ternary operator. Instead of having Reveal as an unchangeable text, the variable setting it allowed the text to change - `{conwayState.showConway ? "Hide" : "Show"}`. This variable is also able to be set in an if statement, which is currently commented out from lines 86-93. Andrew explained it's better to use the ternary operator as it saves lines of code and saves creating an unnecessary mutable variable. 

To activate the show / reveal feature when clicked, below the button I updated the `<Conway etc..>` line to be `{conwayState.showConway && <Conway {...conwayState}/>}`. 

`Conway` was originally set within the `return` as `<Conway board={conwayState.board}/>` however Andrew showed me this could be updated to ` <Conway {...conwayState}/>}`. It turned out I had already used this with `<WarningMessage {...bigRed}/>` too. `bigRed` was assigned value by `  const bigRed = useBigRedButton({initCount:0})`. NOTE: I initially had `useBigRedButton` as `UseBigRedButton` and Andrew told me to amend this. Should always start with lowercase letters. 

I am going to tidy up the code within App.js so that the variables are declared in the order they appear onscreen and also are grouped properly too for readability. 

## Update Thursday 11th November - python - morning session

Created a directory/folder `webserver` which contains a python file `app.py`. This file sets routes (URL endpoints). To do this we used `Flask` library via `pip install flask`. In the app.py we imported Flask via `from flask import Flask`. Then used `app = Flask(__name__)`
https://blog.miguelgrinberg.com/post/why-do-we-pass-name-to-the-flask-class

`@app.route("/sarah")` is used to create URL with the endpoint /sarah. Directly below this code a function is defined to dictate what the url endpoint should display (via a return statement). 

Variables can be set in the url endpoint by using `< > ` angled brackets. For example - 
`@app.route("/double/<my_number>")
def double(my_number):
    
    return f"Your number is {my_number}"`

The variable is passed as a parameter into the function definition. 

`f` before a return statement is used to format the variable in the return statement and the variable must be in `{}` curly brackets to access it. 

Several parameters can be defined in a url - e.g. 
`@app.route("/users/<int:user_id>/charge/<int:amount>/")
def charge_user(user_id, amount):

    return f"I am charging user {user_id} {amount} pounds."`

To run flask, you can either use - 
`FLASK_ENV=development FLASK_APP=webserver.app python -m flask run` within terminal OR `./run-flask.sh` within terminal which is a file in the conway folder which contains the previous command. development within the command means that the appearance will be updated as changes occur. 

The app can be accessed at http://127.0.0.1:5000/ 

A very basic database can be created by using a python dictionary - e.g
`
users = {
    1: {"name": "Alice", "job": "Doctor"},
    2: {"name": "Bob", "job": "Fireman"},
    3: {"name": "Claire", "job": "Police"},
    4: {"name": "Dave", "job": "Greengrocer"},
    5: {"name": "Emily", "job": "Helicopter Pilot"},
} `

To display returned objects in an json array, `jsonify` was imported by updating the import statement to `from flask import Flask, jsonify`. 

Accessing the database could be done like so - 
`@app.route("/user/<int:user_id>")
def get_user(user_id):

    user = users[user_id]

    return jsonify(user)`

The result returned is jsonified and displays as - 
`{
  "job": "Doctor", 
  "name": "Alice"
}`

To display an error message, eg if a user number is entered in the URL that doesn't exist in the database, an error message can be displayed by using a `try: except` catch. e.g. 
`@app.route("/user/<int:user_id>/<key>")
def get_userdetails(user_id, key):
    try:
        user = users[user_id]
    except KeyError:
        return jsonify("That user doesn't exist"), 404    
        
    try:
        key = user[key]
    except KeyError:
        return jsonify(f"We don't have a detail called '{key}'"), 400

    return jsonify(key) `

To test python I installed pytest via `pip install pytest`. For pytest to run a file called `__init.py__` was created. This file is empty but its presence initialises python for testing.  

To test the functions were returning what they should, a `test_app.py` file was created. Then `import pytest` was written at line 1 to access testing capabilites. 
To name the file that should be tested `import webserver.app` was imported. This is foldername.filename. 

To test a function, declare a test followed by the function name e.g.
`def test_foo():
  result = webserver.app.foo()

    assert result == "<h1>Baz!</h1>"
`
An error can also be tested for with `pytest.raises(KeyError):`

Several tests can be run at once using `@pytest.mark.parametrize` to run several tests. 

A folder within `webserver` was created called `templates` which contains a html file `hello.html`. To access the ability to display templates, the from statement at the top of `app.py` was updated to `from flask import Flask, jsonify, render_template`. 

Variables can displayed in the html file in curly braces - e.g. - 
`<p>Your name is {{name}}</p>`

To loop through a python database in html  a for loop was used - e.g.
`{% for user_id, user in users.items() %}
    <li>{{user_id}} Name: {{user.name}}. Job: {{user.job}}.</li>
    {% endfor %}`
This structure is different to what I'm used to seeing. 

To display the html it is rendered in app.py in the return statement - e.g.
`def template_test(name="Andy"):
    return render_template("hello.html", name=name, users=users)`

Also two URLs can display the same html e.g. - 
`@app.route("/template-test")
@app.route("/template-test/<name>")
def template_test(name="Andy"):
    return render_template("hello.html", name=name, users=users)`


## Update Thursday 11th November - python - afternoon  session
Aim was to create a .jsx file that accessed details from the simple database stored in app.py. 
Created a file `EmployeeData.jsx` in `src`. 

Firstly covered different ways of writing a JS function which is commented out in `EmployeeData.jsx`. 

A new component called `EmployeeData` was created which took `props` as a parameter. 
It returns html within a `<div></div>`. The div contains an input form and and a button. 

Hooks were created is another function `useEmployeeData`. To add state to the variables within it, `import {useState, useEffect} from 'react';` was used at the top of the file. 
A variable `inputtedText` was set to `''` (empty string) using State and then within the `input` box the value was assigned to `inputtedText` using {} curly braces. 

To set the value of `inputtedText` another function was created inside `useEmployeeData` called `handleChange`. handleChange is activated `onChange` of the input. Like `onClick` but instead `onChange`.

An `event` was passed into this and a new variable `newText` was assigned to the value of event.target.value - 
` const newText = event.target.value`. Don't know exactly how this works - **do reading on event**. The value of `inputtedText` was set to the value of the variable newText. `setInputtedText(newText);` was used to do this. 

To submit the contents of the input, a button was created (within `EmployeeData`) and an onClick called a function `handleGetEmployeeData` - which was created in `useEmployeedata`. Initially used the console.log to register if the button was being clicked. 

3 other useState variables were created in `useEmployeeData` to set the status - `isLoaded`, `userInfo`, `error` along with setters. The initial state of isLoaded was set to `true` and the intital states of userInfo and error were set to `null`.

Within `handleGetEmployeeData` (activated when the button is clicked), `setUserInfo` was assigned `null` and `setIsLoaded` was assigned `false`.

A `const url` was declared in `useEmployeeData` which was set to the value of `http://127.0.0.1:5000/user/${inputtedText}`. This address was used because this is the url made live when Flask is activated (`./run-flask.sh`). The inputtedText is passed to the url as userID. 

A function called `useEffect` was created in `useEmployeeData`.  

It used fetch and then - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

If isLoaded is true, the console logs a fetch complete message. 

`fetch(url)` is used to fetch the contents of the url and the response is converted to a json array. 

The result of of the fetch then sets `isLoaded` to true, and setUserInfo is set to result and setError is set to null. 
If result is an error, an setError is set to the value of error. 

Return statement of `useEmployeeData` returns `userInfo, error, inputtedText, handleChange, handleGetEmployeeData`. 


There is a function called `UserInfo` which takes in props and returns the contents as a list. It uses `Object.entries` and maps it - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

In `App.js` another `import` statement was added at the top of the code to `import { EmployeeData, useEmployeeData } from "./EmployeeData";` . An new const employeeState was declared, to access the functions in useEmployeeData - `const employeeState = useEmployeeData();`. 

Within the return statement of App.js EmployeeData was called and employeeState was passed to it - `<EmployeeData {...employeeState}/>`. 


