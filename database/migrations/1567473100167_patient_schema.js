'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PatientSchema extends Schema {
  up () {
    this.create('patients', (table) => {
      table.increments()
      table.string('code')
      table.string('name')
      table.enu('gender', ['male', 'female'])
      table.string('age')
      table.string('weight')
      table.enu('position', ['standing', 'supine'])
      table.enu('projection', ['oblique', 'ap', 'pa'])
      table.enu('fdd', ['oblique', 'ap', 'pa'])
      table.string('kv').nullable()
      table.string('ma').nullable()
      table.string('s').nullable()
      table.string('mas').nullable()
      table.string('skin').nullable()
      table.string('dap')
      table.timestamps()
    })
  }

  down () {
    this.drop('patients')
  }
}

module.exports = PatientSchema
