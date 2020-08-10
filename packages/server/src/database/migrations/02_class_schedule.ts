import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('CLASS_SCHEDULE', table => {
    table.increments('id').primary();

    table.integer('week_day').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();

    table.integer('class_id')
      .notNullable()
      .references('id')
      .inTable('CLASSES')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('CLASS_SCHEDULE');
}
