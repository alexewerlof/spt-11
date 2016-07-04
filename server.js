var fakeApi = require('./fake-api');
var process = require('process');
var open = require("open");
var express = require('express');
var app = express();
var compression = require('compression');
var helmet = require('helmet');

// Security: https://github.com/helmetjs/helmet#how-it-works
app.use(helmet());

// gzip, etc. for reducing transfer time
app.use(compression());

// Fake API middleware
app.use(fakeApi);

// The front end is in www folder. Serve it as is.
app.use(express.static(__dirname +  '/www'));

var listener = app.listen(process.env.npm_package_config_port || 5000, function () {
    var port = listener.address().port;
    console.log(`Server listening on port ${port}...`);
    if (!process.env.npm_config_production) {
        console.log('Opening browser...');
        //TODO enable this open(`http://localhost:${port}`);
    }
});
