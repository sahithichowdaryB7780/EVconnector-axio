const chai = require('chai');
const expect = chai.expect;
const supertest = require('supertest');
const app = require('../estimation');

describe('/estimate-charging-time', () => {
  it('should return estimated charging time', async () => {
    const response = await supertest(app)
        .get('/estimate-charging-time')
        .query({power: 10, soc: 50, battcapacity: 40});

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('estimationChargingTime');
    expect(response.body.chargingTime).to.equal(2);
  });
});
