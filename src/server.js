var express = require("express");
var log4js = require("log4js");
var config = require("./config.js");

var app = express();
app.use(express.static(config.static.html));
app.use(express.static(config.static.js));

var logger = log4js.getLogger('Server');

// app.get('/', function(req, res) {
//     res.sendFile(config.static + '/html/index.html');
// });

app.put('/1/upload', function(req, res){
    console.log(req.body); // form fields
    console.log(req.files); // form files
});

app.listen(3000, function () {
    console.log('Server started.  Listening on port 3000...');
});

function parseFile(req, res, next){
    logger.debug(req.files);
}
