/* eslint-disable no-undef */
const request = require('supertest');
const app = require('./app.js');

describe('Test the root path', () => {
  test('It should respond to a GET request to /', () => request(app).get('/').expect(200));
});
