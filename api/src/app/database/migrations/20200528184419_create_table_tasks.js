
exports.up = knex => knex.schema.createTable('tasks', table => {
        table.increments('id');
        table.text('description').notNullable();
        table.boolean('done');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });

exports.down = knex => knex.schema.dropTable('tasks');
