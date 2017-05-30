process.env.NODE_ENV = 'test';

const environment = 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);
const chai = require('chai');

const should = chai.should();
const { expect } = require('chai')
const chaiHttp = require('chai-http');
const server = require('../server/main');

chai.use(chaiHttp);


describe('hey', () => {
  it('works?', () => {
    expect(true)
  })
})

describe('Turing overflow server testing', () => {
  before((done) => {
    database.migrate.latest()
    .then(() => {
      return database.seed.run();
    })
    .then(() => {
      done();
    });
  });

  beforeEach((done) => {
    database.seed.run()
    .then(() => {
      done();
    });
  });
});

describe('GET /questions', () => {
  it('should return all questions', (done) => {
    chai.request(server)
    .get('/questions')
    .end((error, response) => {
      console.log(response.body);
      response.should.have.status(200);
      done();
    });
  });
});
