module.exports = {
  "endpoints": [
    {
      "title": "Advertiser List",
      "description": "Lists all the advertisers",
      "url": "/advertisers/",
      "params": [
        {
          "name": "format",
          "description": "Describes the format of the result?",
          "default": "api",
          "optional": true,
          "type": "string"
        }
      ]
    }
  ]
};
