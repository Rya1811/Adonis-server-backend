'use strict'

class UserController {
	sync index ({response}) {
		let students = await Student.all()
		return response.json(students)
	}

	async store ({request, response}) {
		const studentInfo = request.only(['name', '', 'study'])
		const student = new Student()
		users.username = usersInfo.username
		users.email = usersInfo.email
		users.password = usersInfo.password
		await users.save()
		return response.status(201).json(users)
	}
	async show ({params, response}) {
		const users = await Users.find(params.id)
		return response.json(users)
	}

	async update ({params, request, response}) {
		const studentInfo = request.only(['nisn', 'name', 'study'])
		const student = await Student.find(params.id)
		if (!student) {
			return response.status(404).json({data: 'Resource not found'})
		}
		student.nisn = studentInfo.nisn
		student.name = studentInfo.name
		student.study = studentInfo.study
		await student.save()
		return response.status(201).json(student)
	}
	async delete ({params, response}) {
		const student = await Student.find(params.id)
		if (!student) {
			return response.status(404).json({data: 'Resource not found'})
		}
		await student.delete()
		return response.status(204).json(null)
	}
}

module.exports = UserController
