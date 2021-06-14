Rails app generated with [lewagon/rails-templates](https://github.com/lewagon/rails-templates), created by the [Le Wagon coding bootcamp](https://www.lewagon.com) team.

## Starting the App

```
$ yarn
$ bundle
$ ./bin/webpack-dev-server
$ rails s
```

```
- how to update seeds in both dev and deployed databases
- link to animation library
- bootstrap
- Ruby on rails
- React Redux
- explain where each important element of code is and the general structure of the file system
- review the other readme and add any necesary instructions to this one
```

## Stack Used

Backend: 
  - Ruby on Rails
Frontend: 
  - React and Redux
  - React Bootstrap

## Import Commands:
Push to Production Repo on Heroku
```
  $ git push heroku master
```



## Adding new `.scss` files

Look at your main `application.scss` file to see how SCSS files are imported. There should **not** be a `*= require_tree .` line in the file.

```scss
// app/assets/stylesheets/application.scss