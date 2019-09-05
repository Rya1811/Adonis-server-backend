'use strict'

const User = use('App/Models/User')

class UserController {
  async index ({ response, request }) {
    const user = await User.all()
    return response.json(user)
  }

  async store ({ request, response }) {
    const { name, email, password, access } = request.post()
    const user = new User()
    user.name = name
    user.access = access
    user.email = email
    user.password = password
    await user.save()
    return response.status(201).json(user)
  }

  async show ({ request, response, params: { id } }) {
    const user = await User.findOrFail(id)
    return response.ok({
      data: user
    })
  }

  async update ({ request, response, params: { id } }) {
    const data = request.only(['email', 'password', 'access'])
    const user = await User.findOrFail(id)
    user.merge(data)
    await user.save()
    return response.ok({
      data: user
    })
  }

  async destroy ({ request, response, params: { id } }) {
    const user = await User.findOrFail(id)
    await user.delete()
    return response.noContent()
  }
}

module.exports = UserController
