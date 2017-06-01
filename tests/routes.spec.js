process.env.NODE_ENV = 'test';

const environment = 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);
const chai = require('chai');

const should = chai.should();
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/main');

chai.use(chaiHttp);

describe('API Routes', () => {
  beforeEach((done) => {
    database.migrate.latest()
    .then(() => {
      return database.seed.run();
    })
    .then(() => {
      done();
    });
  });

  afterEach((done) => {
    database.migrate.rollback()
    .then(() => {
      done();
    });
  });

  // afterEach((done) => {
  //   database.seed.run()
  //   .then(() => {
  //     done()
  //   })
  // })

  describe('GET /questions', () => {
    it('should return all questions', (done) => {
      chai.request(server)
      .get('/api/v1/questions')
      .end((error, response) => {
        response.should.have.status(404);
        done();
      });
    });
  });
});
