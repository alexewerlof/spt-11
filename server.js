var process = require('process');
var open = require("open");
var express = require('express');
var app = express();

// The front end is in www folder. Serve it as is.
app.use(express.static(__dirname +  '/www'));

app.get('/api', function (req, res) {
    res.send('yo');
});

var listener = app.listen(3000, function () {
    var port = listener.address().port;
    console.log(`Server listening on port ${port}...`);
    if (!process.env.npm_config_production) {
        console.log('Opening browser...');
        open(`http://localhost:${port}`);
    }
});