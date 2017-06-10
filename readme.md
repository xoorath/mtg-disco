Getting Started:
=====================

Before your first run:
---------------------
    npm install -g bower@1.8.0 ts-node@2.0.0 typescript@2.1.5 nodemon@1.11.0
    npm install
    bower install

Your first run:
---------------------
    npm run setup
    npm start

Running normally:
---------------------
    npm start

Packaging a build:
---------------------
Packages a build into a `deploy/` directory.

    npm run package

---------------------
Project layout:
=====================

Backend:
---------------------
A webserver written in nodejs. Can be started with "npm start" in the project root.

Frontend:
---------------------
The source and assets for the web application itself.

Public:
---------------------
A folder that's served alongside the Frontend folder. It's good for dependancies and keeping app related code/assets seperated.

An example would be to keep your social icons here, and third party code that's not in bower.

---------------------
The Stack:
=====================

NodeJS:
---------------------
> see: https://nodejs.org/en/

If you're unfamiliar with NodeJS and are playing around with this project, you're gonna have a bad time. Learn the basics first and come back, play with some examples and maybe with [express](http://expressjs.com/).

We have some NPM tasks setup which wrap a few gulp tasks, such as "npm run package", this is just to standardize across multiple projects which may not be using gulp.

As always, "npm start" will start the web app.

Gulp:
---------------------
> see: http://gulpjs.com/

Gulp is a javascript taskrunner. Simply put, we write named tasks in javascript and can run them from the command line with "gulp <taskname>".

We use this for building packaged releases of the application, and building our source code from dust/less into html/css.

Bower:
---------------------
> see: https://bower.io/

Bower is another package manager. Yes, we have two. It's job specifically is to get front-end packages for things like Jquery or Bootstrap.

Dust:
---------------------
> see: http://www.dustjs.com/

Dust is a templating engine written by LinkedIn. It allows us to have some server side injection into our HTML. If you're familliar with Pug/Handlebars, it's a similar concept.

Less:
---------------------
> see: http://lesscss.org/

Less lets you write CSS-like styles that don't suck to maintain. You get variables, mixins and some other features.

TypeScript:
---------------------
> see: https://www.typescriptlang.org/

Literally can just be javascript in a `.ts` file if you want, but then it adds a lot of cool features. Stronger types in javascript and can compile down to various older javascript versions to maintain compatability.

Express:
---------------------
> see: http://expressjs.com/

Express is our backend, it's managing our server calls and dishing out files to users when they go to your website (assuming it's running from nodejs and not packaged)

Reload:
---------------------
> see: https://github.com/xoorath/reload

Reload reloads the browser window whenever you save some source files, or the server restarts.

Nodemon:
---------------------
> see: https://nodemon.io/

Watches the backend folder for changes, and restarts our server when these changes are made. Note: [Reload](https://github.com/xoorath/reload) will also refresh the webpage when the server comes back online.

jQuery:
---------------------
> see: https://jquery.com/

You know when you see nerds using `$('#SomeID')` in javascript to find stuff? Yeah, that's probably jQuery. It does a lot of other stuff, learn that as you go.

Bootstrap:
---------------------
> see: http://getbootstrap.com/

Gives us a grid to work with, some nice buttons, default styling that works across browsers. It's packed with frontend features.