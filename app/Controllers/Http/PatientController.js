'use strict'

const Patient = use('App/Models/Patient')

class PatientController {
	async index ({ request, response }) {
		const patient = await Patient
		.query()
		.paginate(request.input('page'),10)
		return response.ok({
			...patient.toJSON()
		})
		
	}
	async store ({request, response}) {
		const { code, name, gender, age, weight} = request.post()
		const patient = new Patient()
		patient.code = code
		patient.name = name
		patient.gender = gender
		patient.age = age
		patient.weight = weight
		await patient.save()
		return response.status(201).json(patient)
	}
	async show ({params, response}) {
		const patient = await Patient.find(params.id)
		return response.json(patient)
	}
	async update ({params, request, response}) {
		const { code, name, gender, age, weight} = request.post()
		const patient = await Patient.find(params.id)
		if (!patient) {
			return response.status(404).json({data: 'Resource not found'})
		}
		patient.code = code
		patient.name = name
		patient.gender = gender
		patient.age = age
		patient.weight = weight
		await patient.save()
		return response.status(201).json(patient)
	}
	async delete ({params, response}) {
		const patient = await patient.find(params.id)
		if (!patient) {
			return response.status(404).json({data: 'Resource not found'})
		}
		await patient.delete()
		return response.status(204).json(null)
	}
}

module.exports = PatientController
