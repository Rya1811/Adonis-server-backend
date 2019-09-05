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
    u1.name = 'User 1'
    u1.access = 1
    u1.password = 'pass-u1'
    u1.email = 'u1@mail.com'
    await u1.save()

    const u2 = new User()
    u2.name = 'User 2'
    u2.access = 0
    u2.password = 'pass-u2'
    u2.email = 'u2@mail.com'
    await u2.save()

    const u3 = new User()
    u3.name = 'User 3'
    u3.access = 2
    u3.password = 'pass-u3'
    u3.email = 'u3@mail.com'
    await u3.save()
  }
}

module.exports = UserSeeder
