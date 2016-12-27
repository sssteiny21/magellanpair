var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    port = process.env.PORT || 8080,
    Router = require('./routes'),
    app = express();

// Connect to our DB
mongoose.connect('mongodb://localhost/newyears');

// Mount Middleware
app.use( 
  express.static('public'),
  bodyParser.json(), 
  bodyParser.urlencoded({extended : true}), 
  morgan('dev') 
);

// Routes!
Router(app); // Pass the express app object as an argument

// app.use(404 handler)

// Listen for connections
app.listen(port, ()=>{
  console.log(`Server Up and Runnin on ${port}`);
});