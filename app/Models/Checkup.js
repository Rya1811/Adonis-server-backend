'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Checkup extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }
  
  
  patient () {
      return this.belongsTo('App/Models/Patient', 'code', 'code')
  }
}

module.exports = Checkup
