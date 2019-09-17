'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Checkup extends Model {
  Patient () {
      return this.belongsTo('App/Models/Patient')
  }
}

module.exports = Checkup
