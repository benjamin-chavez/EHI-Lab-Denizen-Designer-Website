## Starting the App

```
$ yarn
$ bundle
$ ./bin/webpack-dev-server
$ rails s
```

## Stack Used

Backend: 
  - Ruby on Rails
Frontend: 
  - React and Redux
  - React Bootstrap
  - React Reveal: https://www.react-reveal.com/

## Import Commands:
Push to Production Repo on Heroku 
```
  $ git push heroku master
```
Seed the development database:
```
  $ rails db:drop
  $ rails db:create
  $ rails db:migrate
  $ rails db:seed:all
```
Seed the proudctions database:
```
  $ heroku pg:reset DATABASE --confirm {app-name}
  $ heroku run rake db:migrate
  $ heroku run rake db:seed:all
```


```
  $ 
```


## Adding new `.scss` files

Look at your main `application.scss` file to see how SCSS files are imported. There should **not** be a `*= require_tree .` line in the file.

```scss
// app/assets/stylesheets/application.scss




```
- explain where each important element of code is and the general structure of the file system
- review the other readme and add any necesary instructions to this one
```
