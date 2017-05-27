
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('questions', (table) => {
      table.increments('id').primary();
      table.string('title', 1000);
      table.string('question', 8000);
      table.string('user_name');
      table.integer('views');
      table.integer('answers');
      table.integer('votes');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('answers', (table) => {
      table.increments('id').primary();
      table.string('answer', 8000);
      table.string('user_name');
      table.integer('votes');
      table.integer('question_id').unsigned();
      table.foreign('question_id')
        .references('questions.id');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('tags', (table) => {
      table.increments('id').primary();
      table.string('tag');
      table.integer('question_id').unsigned();
      table.foreign('question_id')
        .references('questions.id');

      table.timestamps(true, true);
    }),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('answers'),
    knex.schema.dropTable('tags'),
    knex.schema.dropTable('questions'),
  ]);
};
