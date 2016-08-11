#Disney Contest Boilerplate

####Technologies Used

  * NodeJS
  * NPM
  * Express
  * Webpack
  * Babel
  * React
  * SASS
  * Nodemon

####Getting Started In Development

In your terminal run the following:

```shell
#on first run:
npm install
#also on first run
#if it doesn't work run:
# sudo npm install -g foreman
npm install -g foreman
#every other run after:
nf start -j Procfile.dev
```


Both the build/dev process and server have watchers -- no need to reload unless you change the materialize variables!!

####Deployment

In your terminal run the following:

```shell
#on first run:
heroku create MY_APP
#every other run:
git push heroku master
#or a non master branch:
git push heroku branchname:master
```
