'use strict'

const User = use('App/Models/User')

class AuthController {
  async postLoginApi ({ request, auth }) {
    const { email, password } = request.all()
    return auth
      .attempt(email, password, true)
  }
}

module.exports = AuthController
