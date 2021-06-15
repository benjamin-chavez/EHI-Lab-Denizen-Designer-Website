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
Seed the production database:
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

## General Notes:
As previously stated, this app uses a ruby on rails backend and a react redux frontend. 

The frontend code is organized into three primary sections app_denizen (Denizen Designer), app_hopd (History of Participatory Design), and shared. The app_hopd was only partially implemented, so the code has been hidden. Nonetheless, the folder structure is in place for future development. You will find the majority of the frontend code in the javascript folder.The components are stored in the containers folder and organized by screens.

In the javascript folder you will also find the actions and reducers folders as part of the redux framerwork. The reducers are combined in the store.js file and then the app is rendered through the index.jsx file.

The majority of the scss stylesheets are placed within the "javascript/assets" folder. These .scss files are then imported into the application.scss file located at 'app/assets/stylesheets/application.scss'. 

All image media is stored in the 'app/assets/images' folder, not in the 'app/javascript/assets' folder.

The backend ruby on rails api is located in the 'app/controllers/api/v1' folder.

The entire app is rendered through 'app/views/layouts/application.html.erb'.

