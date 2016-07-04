var chai = require('chai');
var chaiHttp = require('chai-http');
var packageJson = require('../../package.json');
var expect = chai.expect;

chai.use(chaiHttp);
var PORT = packageJson.config.port;

console.log(`Make sure the server is running on ${PORT}`);

describe('Integration tests', function () {
  describe('/endpoints/', function () {
    it('should return something', function (done) {
      chai.request(`http://localhost:${PORT}`)
        .get('/endpoints/')
        .end(function (err, res) {
           expect(err).to.be.null;
           expect(res).to.have.status(200);
           done();
        });
    });

    it('should return valid json when the request specifies that', function (done) {
      chai.request(`http://localhost:${PORT}`)
        .get('/advertisers/')
        .set('Accept', 'application/json')
        .end(function (err, res) {
           expect(err).to.be.null;
           expect(res).to.have.header('content-type', 'application/json');
           done();
        });
    });
  });
})
