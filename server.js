var express = require('express');

var app = express();

var PORT = process.env.PORT || 8060;

//Require models for syncing
var db = require('./models');

app.use(express.static('public'));


//Parce application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Import routes and give the server access to them
var routes = require('./controllers/burgers_controllers.js');

app.use(routes);

//Start server and listen to client requests
app.listen(PORT, function () {
    console.log(
        `Server listening on: http://localhost:${PORT}`
    );
});