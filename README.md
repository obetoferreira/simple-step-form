# simple-step-form
:loop: Simple multi step web-app made with angular + sass + gulp.

----------------------------------------

### Important ###

Seems like OMDb API is now a paid service. To activate all http requests you have to replace the API KEY, located in `index.constants.js` line 9.

### Dependencies ###

* Node
* NPM
* Gulp

### Getting started ###

Assuming you already have all dependencies installed, you can run this application.

* After cloning this repo, you install all dependencies before running the application. 
Just open your terminal and type:

```
npm install && bower install
```

* Dependencies installed, you can start the app using the following command line:

```
gulp serve
```
Now you can see app running, paste the url `http://localhost:3000/` in your favorite browser.

### Technology stack ###

* Package managers: **NPM + Bower**
* Task runner: **Gulp**
* Front-end framework: **Angular.js**
* CSS pre-processor: **SASS**
* CSS frameworks: **AngularJS Material**

### Considerations ###

* All files structure was built manualy. That means, no scaffolding generator were used.
* Assuming this application is for development only, features as: build task, minification, design details, custom alerts and deep testing were not made in order to improve development time execution.
* Any questions? Mail-me: obetoferreira@gmail.com
