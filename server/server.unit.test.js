const request = require('supertest');
const app = require('../server/app');

describe('Test the root path', () => {
  test('It should response the GET method', () => {
      return request(app).get("/").then(response => {
          expect(response.statusCode).toBe(200)
      })
  });
});

describe('Test the overview path', () => {

  test('It should receive a response to the GET method', (done) => {
    request(app).get('/overview/listingId/1').then((response) => {
      expect(response.statusCode).toEqual(200);
      done()
    });
  });

  test('It should send data containing 0 or more listing descriptions', (done) => {
    request(app).get('/overview/listingId/1').then((response) => {
      expect(response.body.length).toBeGreaterThanOrEqual(0);
      done();
    });
  });

  test('It should return a field called "summary" with data', (done) => {
    request(app).get('/overview/listingId/1').then((response) => {
      expect(response.body[0].summary.length).toBeGreaterThan(0);  
      done();
    });
  });

  test('It should return a field called "theSpace" with data', () => {
    return request(app).get('/overview/listingId/1').then((response) => {
      expect(response.body[0].theSpace.length).toBeGreaterThan(0);
    });
  });

  test('It should return a field called "guestAccess" with data', (done) => {
    request(app).get('/overview/listingId/1').then((response) => {
      expect(response.body[0].guestAccess.length).toBeGreaterThan(0);
      done();
    });
  });

  test('It should return a field called "interactionWithGuests" with data', (done) => {
    request(app).get('/overview/listingId/1').then((response) => {
      expect(response.body[0].interactionWithGuests.length).toBeGreaterThan(0);
      done();
    });
  });

  test('It should return a field called "otherThingsToNote" with data', (done) => {
    request(app).get('/overview/listingId/1').then((response) => {
      expect(response.body[0].otherThingsToNote.length).toBeGreaterThan(0);
      done();
    });
  });
});
