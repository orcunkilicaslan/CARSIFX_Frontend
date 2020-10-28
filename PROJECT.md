## Project Structure 

This project is npm-based project and relies on both NodeJS and NPM (aka node package manager) to work properly.

#### Used tech stack

- Html5/Css3
- jQuery
- Bootstrap 4
- Sass as css preprocessor


-------------------------------------

### Directory Structure & Naming Conventions

Scalability and implementation of future revisions are pretty much important in reality especially when new developers join the company and structure of project increase both horizontally and vertically.

Naming conventions really matter for new developers to understand the project structure and what actually happened inside the code without taking additional help 


------------------------------------

### Project Organisation

We use Gulp as task runner and build tool for our project. If you are not familiar with Gulp you may want to visit Gulp.js docs for getting started properly.

Since Gulp.js is a task runner, everything inside Gulp.js divided into specific functions (or tasks) to accomplish given task properly.
This also increase code readability, productivity and helps understanding the structure. 

We have 3 commands to execute tasks;
- `dev` runs the project/app in development mode and sync/reload all changes live in browser
- `build` for non-minified build version of the app. Mostly used for building protect for backend developers.
- `build-prod` (prod short of production) used for fully minified and compressed version of the project.
- `serve` it's just alias for `dev` command. Some developers may used to type `serve` command rather than `dev` command

------------ 

### Gulpjs.file

When we run any command above from our favorite terminal (eg `npm run dev`), we actually call a task (dev task in this case) and Gulp process 
entire task and gives us desired output. 

For example when we call `dev` task these steps actually happens: 

- npm runs the dev command
- `dev:gulp dev` command initiates
- `dev:gulp dev` command runs these commands in order:
  - compiles all scss files and put them in `dist` folder
  - compiles all javascript files and also put them in `dist` folder
  - enables BrowserSync to listen all html files in `src` folder
  - activates watching sass, js and html files for changes. when changes happen, it automatically reloads/refresh changes in the browser.
- Removes `dist` directory and its contents when terminal and/or related job closed/done.
  
In addition to `dev` command, `build` commands do following tasks; 
- clear the `dist` directory
- `build` command compiles sass, js and html files and output them in `dist` folder
- `build-prod` command compiles and minify the sass/javascript files and prepare them for production