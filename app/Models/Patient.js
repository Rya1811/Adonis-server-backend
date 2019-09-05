'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Patient extends Model {
  checkups () {
    return this.hasMany('App/Models/Checkup', 'code', 'code')
  }
}

module.exports = Patient
