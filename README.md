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
npm install
npm run dev
```

Now in a new terminal tab run:

```shell
npm start
```

To build the JS out:

```shell
npm run build
```

Both the build/dev process and server have watchers -- no need to reload unless you change the materialize variables!!

####Deployment

On first run:
```
heroku create MY_APP
```

From there:

`git push heroku master` or `git push heroku branchname:master`
