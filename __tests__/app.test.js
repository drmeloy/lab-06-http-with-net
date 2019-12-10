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
        expect(response.status).toEqual(200);
      });
  });

  it('handles a GET /red route', () => {
    return request(app)
      .get('/red')
      .then(response => {
        expect(response.text).toEqual('<h1 style=color:red>red</h1>');
      });
  });

  it('handles a GET /green route', () => {
    return request(app)
      .get('/green')
      .then(response => {
        expect(response.text).toEqual('<h1 style=color:green>green</h1>');
      });
  });

  it('handles a GET /blue route', () => {
    return request(app)
      .get('/blue')
      .then(response => {
        expect(response.text).toEqual('<h1 style=color:blue>blue</h1>');
      });
  });
});
