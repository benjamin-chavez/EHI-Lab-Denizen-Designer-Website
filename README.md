## General Notes:
This app uses a ruby on rails backend and a react redux frontend. 

The frontend code is organized into three primary sections app_denizen (Denizen Designer), app_hopd (History of Participatory Design), and shared. The app_hopd was only partially implemented, so the code has been hidden. Nonetheless, the folder structure is in place for future development. There are portions of the app_hopd section that you can uncomment to bring back into the view. 

You will find the majority of the frontend code in the 'app/javascript' folder. The components are stored in the containers folder and organized by screens. In the javascript folder you will also find the actions and reducers folders as part of the redux framework. The reducers are combined in the store.js file and then the app is rendered through the index.jsx file.

The majority of the SCSS stylesheets are placed within the "javascript/assets" folder. These .scss files are then imported into the application.scss file located at 'app/assets/stylesheets/application.scss'. 

All local image media is stored in the 'app/assets/images' folder, not in the 'app/javascript/assets' folder. External image media is stored on cloudinary.com. Login details can be provided by The EHI Lab.

The backend ruby on rails API is located in the 'app/controllers/api/v1' folder.

The entire app is rendered through 'app/views/layouts/application.html.erb'.

## Starting the App

```
$ yarn
$ bundle
$ ./bin/webpack-dev-server
$ rails s
```

## Stack Used

Backend: 
  - Ruby on Rails => https://guides.rubyonrails.org/ 
  - Database => https://www.postgresql.org/

Frontend: 
  - React: Frontend framework => https://reactjs.org/
  - Redux: State Handler => https://redux.js.org/
  - React Bootstrap: CSS style library => https://react-bootstrap.github.io/
  - React Reveal: Animation library  =>  https://www.react-reveal.com/

## Other Important Commands:
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
