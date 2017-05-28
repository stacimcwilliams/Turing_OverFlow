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

//post a question
router.post('api/v1/questions', (request, response) => {
  const validQuestion = ['title', 'question', 'user_name'].every(prop => request.body.hasOwnProperty(prop));
  const question = request.body

  if (!validQuestion) {
    return response.status(422).send({ error: 'You are missing data '} )
  }

  database('questions').insert(question, ['id', 'title', 'question', 'user_name'])
  .then((newQuestion) => {
    response.status(201).json(newQuestion[0])
  })
  .catch((error) => {
    console.log('error', error);
    response.status(500).send('You are missing info')
  });
});

module.exports = router;
