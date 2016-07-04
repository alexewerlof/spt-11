var path = require('path');
const ENDPOINTS =  require('./endpoints.json');
const JSON_MIME =  'application/json';
const XML_MIME =  'application/xml';

// Check if one string contains another
function strContains(containerStr, containeeStr) {
  containerStr = containerStr.toLowerCase();
  containeeStr = containeeStr.toLowerCase();
  return containerStr.indexOf(containeeStr) !== -1;
}

module.exports = function (req, res, next) {
  if (req.url.toLowerCase() === '/endpoints/') {
    // Send the list of endpoints to the client
    res.send(ENDPOINTS);
    next();
  }
  // If any endpoint matches this url, send the descriptor back
  var endpoint = ENDPOINTS.endpoints.find(ep => ep.url === req.url);
  if (endpoint) {
    var isJson = strContains(req.headers.accept, JSON_MIME);
    var fileName = path.format({
      dir: __dirname,
      name: endpoint.fileName,
      ext: isJson ? '.json' : '.xml'
    });
    res.set('Content-Type', isJson ? JSON_MIME : XML_MIME);
    res.sendFile(fileName);
  } else {
    next();
  }
};
