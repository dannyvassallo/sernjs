#Welcome to SERN.JS Stack

SERN.JS is a Full-Stack Javascript for an easy starting point with SequilizeJS, ExpressJS, ReactJS and NodeJS based applications.

It is designed to give you a quick and organized way to start developing SERN based web apps.

###Technologies Used

  * NodeJS
  * NPM
  * Express
  * Webpack
  * Babel/ES6
  * React
  * Redux
  * SASS
  * Nodemon
  * Reload
  * Sequelize
  * Sequelize-CLI
  * PostgreSQL
  * Foreman
  * Pretty Error
  * Material UI
  * flexboxgrid

###Getting Started In Development

In your terminal run the following:

```shell
#on first run:
npm install
#also on first run
#if it doesn't work run:
# sudo npm install -g foreman
npm install -g foreman
#if it doesn't work run:
# sudo npm install -g sequelize-cli
npm install -g sequelize-cli
#open the postgresql.app first
psql -f sern.sql
# migrate the counter model
sequelize -m # || node_modules/.bin/sequelize -m
#every other run after:
#open the postgresql.app
npm start
```

Visit `localhost:5000` in your browser.

To get to the console (like `rails c`):

```
npm run c
```

In the boilerplate, you can query the value of the counter model's count value and log it
using the following example within the console:

```javascript
db.Counter.findById(1).then(function(counter){console.log(counter.count)})
```

###Heroku Deployment

In your terminal run the following:

```shell
#on first run:
heroku create MY_APP && heroku addons:add heroku-postgresql
#get your postgres url using this command:
heroku config:get HEROKU_POSTGRESQL_BRONZE_URL
#every other run:
git push heroku master
#or a non master branch:
git push heroku branchname:master
```

###Material UI & flexboxgrid

For documentation and component examples in Material UI visit the homepage [here](http://www.material-ui.com/#/).

Flexboxgrid uses the same convention as bootstrap's grid but you can also view the
docs [here](http://flexboxgrid.com/) for it's additional uses.


###Sass/Scss Setup

The `application.scss` file is available in `client/stylesheets/application.scss`.
Feel free to alter this file or `@import` additional `sass/scss` files from the
`stylesheets` folder.

###Sequelize [(docs)](https://github.com/sequelize/cli)

We use PostgreSQL. On OSX you can set this up pretty quickly by using the [Postgres.app](http://postgresapp.com/).

FIRST, provision the databases:

```shell
#only run this on first install
#this will drop your DB if it exists
#don't run this is you already have
psql -f node_react_boilerplate.sql
```

THEN Install Sequelize CLI Globally

```shell
npm install -g sequelize-cli
#and then use it like this:
sequelize [--HARMONY-FLAGS]
```

OR run from dev (it's a dep already)

```
node_modules/.bin/sequelize [--HARMONY-FLAGS]
```

Example User model Creation / Migration:

```
sequelize model:create --name User --attributes username:string,email_address:string,password:string
sequelize db:migrate
```

Usage:

```shell
Sequelize [Node: 2.5.0, CLI: 1.8.3, ORM: 2.1.3]

Usage
  sequelize [task]

Available tasks
  db:migrate             Run pending migrations.
  db:migrate:old_schema  Update legacy migration table
  db:migrate:undo        Revert the last migration run.
  db:migrate:undo:all    Revert all migrations ran.
  db:seed                Run seeders.
  db:seed:undo           Deletes data from the database.
  db:seed:undo:all       Deletes data from the database.
  help                   Display this help text. Aliases: h
  init                   Initializes the project.
  init:config            Initializes the configuration.
  init:migrations        Initializes the migrations.
  init:models            Initializes the models.
  init:seeders           Initializes the seeders.
  migration:create       Generates a new migration file. Aliases: migration:generate
  model:create           Generates a model and its migration. Aliases: model:generate
  seed:create            Generates a new seed file. Aliases: seed:generate
  version                Prints the version number. Aliases: v
```

###Cool Tip

If you manipulate the folder structure on OSX, you may wind up with `.DS_Store`
files. They're already git ignored but if you want to completely remove all of them from the project:

```shell
#within the repo
find . -name .DS_Store -print0 | xargs -0 rm
```

If they somehow get removed from the`.gitignore` run the following first:

```shell
find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch
```
