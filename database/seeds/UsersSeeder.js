'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')

class UserSeeder {
  async run () {
  	const u1 = new User()
    u1.name = 'Arya'
    u1.access = 1
    u1.password = 'Supervisor'
    u1.email = 'arya@mail.com'
    await u1.save()

    const u2 = new User()
    u2.name = 'Pramudya'
    u2.access = 0
    u2.password = 'Operator'
    u2.email = 'pram@mail.com'
    await u2.save()

    const u3 = new User()
    u3.name = 'Arya'
    u3.access = 2
    u3.password = 'Admin'
    u3.email = 'arr@mail.com'
    await u3.save()
  }
}

module.exports = UserSeeder
