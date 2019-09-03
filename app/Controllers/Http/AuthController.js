'use strict'

const User = use('App/Models/User')

class AuthController {
	
	async postLoginApi({ request, auth}) {
		const { email, password} = request.all()
		return auth
			.attempt(email, password, true)
	}
	async store ({request, response}) {
		const userInfo = request.only(['name', 'email', 'password'])
		const user = new User()
		user.name = userInfo.name
		user.role = userInfo.role
		user.email = userInfo.email
		user.password = userInfo.password
		await user.save()
		return response.status(201).json(user)
	}
	async getProfileApi({ response, auth }) {
		return response.send(auth.current.user)
	}

}

module.exports = AuthController
