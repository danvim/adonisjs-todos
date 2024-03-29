'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateTodosSchema extends Schema {
  up () {
    this.create('todos', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.boolean('is_done').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('todos')
  }
}

module.exports = CreateTodosSchema
