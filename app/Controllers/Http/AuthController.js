'use strict'

const User = use('App/Models/User')

class AuthController {

	async index ({response}) {
		let user = await User.all()
		return response.json(user)
	}
	
	async postLoginApi({ request, auth}) {
		const { email, password} = request.all()
		return auth
			.attempt(email, password, true)
	}
	async store ({request, response}) {
		const { name, email, password, access } = request.post()
		const user = new User()
		user.name = name
		user.access = access
		user.email = email
		user.password = password
		await user.save()
		return response.status(201).json(user)
	}
	async getProfileApi({ response, auth }) {
		return response.send(auth.current.user)
	}

}

module.exports = AuthController
