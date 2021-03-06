const express = require('./node_modules/express');
const path = require('path');
const handlebars = require('express-handlebars');
const bodyParser = require('./node_modules/body-parser');
const routing = require('./routing');
const port = 4000;
const app = express();

app.engine(".hbs", handlebars({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
routing(app);

app.listen(port, console.log("Listening on port " + port + "..."));