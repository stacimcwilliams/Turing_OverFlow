const express = require('express');

const router = express.Router();
const utils = require('./utils.js');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

router.get('/questions', (request, response) => {
  database('questions').select().orderBy('created_at', 'desc')
    .then((questions) => {
      const convertedQuestions = utils.alterTimeStamp(questions);
      response.status(200).json(convertedQuestions);
    })
    .catch((error) => {
      response.status(500).send({ error });
    });
});

router.get('/answers', (request, response) => {
  database('answers').select()
    .then((answers) => {
      response.status(200).json(answers);
    })
    .catch((error) => {
      response.status(500).send({ error });
    });
});

router.get('/tags', (request, response) => {
  database('tags').select()
    .then((tags) => {
      response.status(200).json(tags);
    })
    .catch((error) => {
      response.status(500).send({ error });
    });
});

router.get('/questions/:id/tags', (request, response) => {
  const { id } = request.params;
  database('tags').select().where('question_id', id)
    .then((tags) => {
      if (!tags.length) {
        response.status(404).send({ error: 'No tags exist for this question' });
      } else {
        response.status(200).json(tags);
      }
    })
    .catch((error) => {
      response.status(500).send({ error });
    });
});


router.post('/questions', (request, response) => {
  const validQuestion = ['title', 'question', 'user_name', 'tags'].every(param => request.body[param]);
  const { title, question, user_name, tags } = request.body;

  if (!validQuestion) {
    return response.status(422).send({ error: 'You are missing content from post ' });
  }

  database('questions').insert({ title, question, user_name }, ['id'])
    .then((id) => {
      tags.forEach((tag) => {
        database('tags').insert({ tag, question_id: id[0].id })
          .then(() => {
            response.status(201);
          });
      });
    })
    .then(() => {
      response.status(201).send({ message: 'Question was added' });
    })
    .catch((error) => {
      response.status(500).send({ error });
    });
});

module.exports = router;