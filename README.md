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
  * Reload
  * Materialize CSS/SASS
  * Foreman

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
npm start
```

Visit `localhost:5000` in your browser.

----
Both the build/dev process and server have watchers --
######no need to reload your browser : )
----

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

####Cool Tip

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
