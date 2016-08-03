var express = require('express');
var multer = require('multer');
var log2out = require('log2out');

var app = express();
var uploading = multer({
    dest: './data/'
});

var logger = log2out.getLogger('Server');

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/1/upload', uploading, function(req, res){
    console.log(req.body); // form fields
    console.log(req.files); // form files
});

app.listen(3000, function () {
    console.log('Server started.  Listening on port 3000...');
});

function parseFile(req, res, next){
    logger.debug(req.files);
}