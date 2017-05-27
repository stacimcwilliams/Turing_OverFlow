const express = require('express');

const router = express.Router();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

router.get('/questions', (request, response) => {
  database('questions').select()
    .then((questions) => {
      response.status(200).json(questions);
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

module.exports = router;