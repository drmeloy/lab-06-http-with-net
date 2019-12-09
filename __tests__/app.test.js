const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('handles a GET / route', () => {
    return request(app)
      .get('/')
      .then(response => {
        expect(response.text).toEqual('hi');
      });
  });

  it('handles a POST /echo route', () => {
    return request(app)
      .post('/echo')
      .send('k whatever')
      .then(response => {
        expect(response.text).toEqual('k whatever');
      });
  });
});
