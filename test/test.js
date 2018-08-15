var request = require('supertest');
var app = require('../index2.js');

describe('GET /', function() {
 it('respond with hello world from node.js server', function(done) {

 //navigate to root and check the the response is "hello world"
 request(app).get('/').expect('Hello World from Nodejs Server!', done);
 });
});