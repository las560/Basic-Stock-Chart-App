var path = require("path");

var config = {
    static: {
        html: path.join(__dirname, "/static/html"),
        js: path.join(__dirname, "/static/js")
    }
};

module.exports = config;
