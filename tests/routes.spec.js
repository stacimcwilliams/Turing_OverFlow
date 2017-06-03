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
        console.log(response.body);
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.should.have.length(1);
        response.body[0].should.have.property('id');
        response.body[0].should.have.property('title');
        response.body[0].should.have.property('question');
        response.body[0].should.have.property('user_name');
        response.body[0].should.have.property('views');
        response.body[0].should.have.property('answers');
        response.body[0].should.have.property('votes');
        done();
      });
    });
  });
});
