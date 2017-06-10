import express = require('express');
import pug = require('pug');
import sassMiddleware = require('node-sass-middleware');

const app = express();

// settings
const port = 3000;
const viewsDirectory = 'frontend/views';
const stylesDirectory = 'frontend/styles';
const renderOptions = {
  ////////// pug options
  pretty:true,
  self:true,
  
  ////////// client options
  // min: ".min" or ""
  min:'',
  // GoogleAnalytics: GA code or null
  GoogleAnalytics: null, //`UA-XXXXX-Y`

  nodev: process.version
};

////////////////////////////////////////////////////////////////////// pug
app.set('view engine', 'pug');
app.set('views', viewsDirectory);

////////////////////////////////////////////////////////////////////// public folders
// The point of this is to make .css files available from styles,
// not so we can serve scss files.
app.use(express.static('frontend/styles'));
// serve all bower components 
app.use(express.static('bower_components'));
// serve all public files
app.use(express.static('frontend/public'));

////////////////////////////////////////////////////////////////////// sass
app.use( sassMiddleware({
  src: stylesDirectory,
  dest:'frontend/public',
  debug:false
}));


////////////////////////////////////////////////////////////////////// routes
app.get(`/`, (req:express.Request, res:express.Response) => {
  res.render('todo', renderOptions);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
