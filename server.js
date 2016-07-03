var fakeApiIndex = require('./fake-api/index.js');
var process = require('process');
var open = require("open");
var express = require('express');
var app = express();
var compression = require('compression');

// gzip, etc. for reducing transfer time
app.use(compression());

// The front end is in www folder. Serve it as is.
app.use(express.static(__dirname +  '/www'));

app.get('/api', function (req, res) {
    res.send(fakeApiIndex);
});

var listener = app.listen(process.env.npm_package_config_port, function () {
    var port = listener.address().port;
    console.log(`Server listening on port ${port}...`);
    if (!process.env.npm_config_production) {
        console.log('Opening browser...');
        //TODO enable this open(`http://localhost:${port}`);
    }
});
