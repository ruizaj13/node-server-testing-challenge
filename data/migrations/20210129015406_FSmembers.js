
exports.up = function(knex) {
    return knex.schema.createTable('hackers', tbl => {
        tbl.increments()
        tbl.string('name').unique().notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('hackers')
};
