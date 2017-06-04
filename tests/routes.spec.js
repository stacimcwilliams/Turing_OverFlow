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

  describe('GET /questions', () => {
    it('should return all questions', (done) => {
      chai.request(server)
      .get('/api/v1/questions')
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.should.have.length(2);
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

  describe('GET /questions/:id', () => {
    it('should return all questions', (done) => {
      chai.request(server)
      .get('/api/v1/questions/1001')
      .end((error, response) => {
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
        response.body[0].title.should.equal('How do I convert a number to a string in JavaScript?');
        done();
      });
    });
  });

  describe('GET /answers', () => {
    it('should return all questions', (done) => {
      chai.request(server)
      .get('/api/v1/answers')
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.should.have.length(2);
        response.body[0].should.have.property('user_name');
        response.body[0].should.have.property('votes');
        response.body[0].should.have.property('question_id');
        done();
      });
    });
  });

  describe('GET /questions/:id/tags', () => {
    it('should return a tag by id', (done) => {
      chai.request(server)
      .get('/api/v1/questions/1001/tags')
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.should.have.length(3);
        response.body[0].should.have.property('id');
        response.body[0].should.have.property('tag');
        done();
      });
    });
  });

  describe('POST /api/v1/questions', () => {
    it('should create a new questions', (done) => {
      chai.request(server)
      .post('/api/v1/questions')
      .send({
        title: 'Where do you put the script tag for JavaScript?',
        question: 'Where is the correct place to put the JavaScript tag in the HTML file?',
        user_name: 'Kyle Zucker',
        tags: ['JavaScript', 'React'],
      })
      .end((error, response) => {
        response.should.have.status(201);
        response.body.should.be.a('object');
        response.body.should.have.property('id');
        response.body.should.have.property('title');
        response.body.should.have.property('question');
        response.body.should.have.property('user_name');
        chai.request(server)
        .get('/api/v1/questions/1')
        .end((err, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('array');
          response.body[0].title.should.equal('Where do you put the script tag for JavaScript?');
          chai.request(server)
          .get('/api/v1/questions/1/tags')
          .end((err, response) => {
            response.should.have.status(200);
            response.should.be.json;
            response.body.should.have.length(2);
          });
          done();
        });
      });
    });
  });

  describe('POST /api/v1/answers', () => {
    it('should create a new answer', (done) => {
      chai.request(server)
      .post('/api/v1/answers')
      .send({
        answer: 'You should put it inside the body of your HTML file',
        question_id: '1001',
        user_name: 'Staci McWilliams',
      })
      .end((error, response) => {
        response.should.have.status(201);
        response.body.should.be.a('object');
        response.body.should.have.property('id');
        response.body.should.have.property('answer');
        response.body.should.have.property('user_name');
        chai.request(server)
        .get('/api/v1/answers')
        .end((err, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('array');
          response.body.should.have.length(3);
          done();
        });
      });
    });
  });

  describe('/api/v1/answers/:question_id', () => {
    it('should return an answer by question_id', (done) => {
      chai.request(server)
      .get('/api/v1/answers/1001')
      .end((error, response) => {
        response.should.have.status(200);
        response.body.should.be.a('array');
        response.body.should.have.length(1);
        response.body[0].should.have.property('id');
        response.body[0].should.have.property('answer');
        response.body[0].should.have.property('user_name');
        response.body[0].should.have.property('votes');
        done();
      });
    });
  });

  describe('PATCH /api/v1/questions/:id/votes', () => {
    it('should be able to PATCH a specific vote', (done) => {
      chai.request(server)
      .get('/api/v1/questions/1000')
      .end((error, response) => {
        response.should.have.status(200);
        response.body[0].votes.should.equal(4);
      });
      chai.request(server)
      .patch('/api/v1/questions/1000')
      .query({
        value: 'up',
        counter: 'votes',
      })
      .end((error, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.votes.should.equal(5);
        done();
      });
    });
  });
});
