'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PatientSchema extends Schema {
  up () {
    this.create('patients', (table) => {
      table.increments()
      table.string('code').notNullable()
      table.string('name').notNullable()
      table.enu('gender', ['male', 'female']).notNullable()
      table.string('age').notNullable()
      table.string('weight').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('patients')
  }
}

module.exports = PatientSchema
