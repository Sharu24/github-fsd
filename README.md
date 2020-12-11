# Deploy APIs to heroku

## Clean git status

rm -rf .git
git init
git add .
git commit -m "initial"
git status
should be clean

## Add start script and node engine to package.json

Package.json
"scripts": {
"start": "node app.js",
}
"engines": {
"node": "12.x"
},

## heroku login

heroku login

## heroku create

heroku create

## for an existing heroku app (https://git.heroku.com/thawing-inlet-61413.git)

heroku git:remote -a still-everglades-90216

## heroku git configs

git remote -v

# Heroku Rename

heroku apps:rename getmybio --app still-everglades-90216
(https://git.heroku.com/getmybio.git)

## Push the repo to heroku

git checkout -b main
git branch -D master
git push heroku main

## once initial set up is done

git add .
git commit -m "message"
git push heroku master

## for accessibility heroku / mongo

Allow all routes ( 0.0.0.0/0 ) in mongo network settings
