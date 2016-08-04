var express = require('express');
var log2out = require('log2out');

var app = express();
app.use('/', express.static('static', {
    etag: false
}));


var logger = log2out.getLogger('Server');

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.put('/1/upload', function(req, res){
    logger.debug("should upload a file...")
});

app.listen(3000, function () {
    console.log('Server started.  Listening on port 3000...');
});

function parseFile(req, res, next){
    logger.debug(req.files);
}