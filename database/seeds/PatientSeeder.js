'use strict'

/*
|--------------------------------------------------------------------------
| PatientSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Patient = use('App/Models/Patient')

class PatientSeeder {
  //async run () {
  	//const u1 = new Patient()
    //u1.code = 'Test'
    //u1.name = 'admin'
    //u1.gender = 'male'
    //u1.age = '12'
    //u1.weight = '45'
    //u1.position = 'standing'
    //u1.projection = 'oblique'
    //u1.fdd = 'fa'
    //u1.kv = ''
    //u1.ma = ''
    //u1.s = ''
    //u1.mas = ''
    //u1.skin = ''
    //u1.dap = '1234567'
    //await u1.save()
  
}

module.exports = PatientSeeder
