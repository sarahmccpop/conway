#!/bin/sh
FLASK_ENV=development FLASK_APP=webserver.app python -m flask run
# First time you run this you'll have to do chmod +x ./run-flask.sh
# Run this by cd'ing into conway and typing ./run-flask.sh