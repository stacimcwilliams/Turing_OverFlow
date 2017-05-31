
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('answers').del()
    .then(() => knex('tags').del())
    .then(() => knex('questions').del())
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('questions').insert(
          {
            title: 'How do I get a random number in JavaScript?',
            question: 'I\'m trying to find a way to generate a random number with JavaScript. Any advice much be great.',
            user_name: 'Mike Fenwick',
            views: 11,
            answers: 1,
            votes: 4,
            id: 1000,
          }, 'id')
          .then(ids => {
            return Promise.all([
              knex('tags').insert([
                { tag: 'JavaScript', question_id: 1000 },
                { tag: 'Vanilla JS', question_id: 1000 },
                { tag: 'Random Number', question_id: 1000 },
              ]),
              knex('answers').insert({
                answer: 'You can use the Math.random method and multiply that by how wide you want your random number scale to be. Be aware that Math.random returns a decimal, therefore we would need to round then number off. `const random = Math.floor(Math.random() * 10)` should do it.',
                user_name: 'Kyle Zucker',
                votes: 2,
                question_id: 1000,
              }),
            ]);
          }),
      ]);
    });
};
