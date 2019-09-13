'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CheckupSchema extends Schema {
  up () {
    this.create('checkups', (table) => {
      table.increments()
      table.integer('weight')
      table.enu('position', ['standing', 'supine']).notNullable()
      table.enu('projection', ['oblique', 'ap', 'pa']).notNullable()
      table.enu('fdd', ['oblique', 'ap', 'pa']).notNullable()
      table.string('kv')
      table.string('ma')
      table.string('s')
      table.string('mas')
      table.string('skin')
      table.string('dap')
      table.integer('Patients_id').unsigned().index('Patients_id')
      table.foreign('Patients_id').references('patients.id').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('checkups')
  }
}

module.exports = CheckupSchema