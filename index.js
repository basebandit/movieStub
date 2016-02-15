/**
 * Created by mars on 2/10/16.
 */
/**This will be our Server**/
var express = require("express"),
    logger = require("express-logger"),
    json = require("express-json"),
    bodyParser = require("body-parser"),
    fs = require('fs'),
    port = process.env.PORT || 2595;

var app = express();
app.use(logger({path: "public/log/log.txt"}));
app.use(json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view options", {
    layout: false
});
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.render('public/index.html');
});
app.get('/movies', function (req, res) {
    var movies = require('./data/movies.json');
    res.json(movies);
});
app.listen(port);
console.log('Express server running at http://localhost: ' + port);
