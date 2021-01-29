
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hackers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('hackers').insert([
        {name: 'Elliot'},
        {name: 'Mr. Robot'},
        {name: 'Tyrell'},
      ]);
    });
};
