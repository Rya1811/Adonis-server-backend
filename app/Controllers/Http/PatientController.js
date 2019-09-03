'use strict'

const Patient = use('App/Models/Patient')

class PatientController {
	async index ({response}) {
		let students = await Student.all()
		return response.json(patints)
	}
	async store ({request, response}) {
		const patientInfo = request.only(['code', 'name', 'gender', 'age', 'weight', 'position', 'projection'])
		const patient = new Patient()
		patient.code = patientInfo.code
		patient.name = patientInfo.name
		patient.gender = patientInfo.gender
		patient.age = patientInfo.age
		patient.weight = patientInfo.weight
		patient.position = patientInfo.position
		patient.projection = patientInfo.projection
		patient.kv = patientInfo.kv
		patient.ma = patientInfo.ma
		patient.s = patientInfo.s
		patient.mas = patientInfo.mas
		patient.skin = patientInfo.skin
		patient.dap = patientInfo.dap
		await patient.save()
		return response.status(201).json(patient)
	}
	async show ({params, response}) {
		const patient = await Patient.find(params.id)
		return response.json(patient)
	}
	async update ({params, request, response}) {
		const studentInfo = request.only(['nisn', 'name', 'study'])
		const student = await Student.find(params.id)
		if (!student) {
			return response.status(404).json({data: 'Resource not found'})
		}
		patient.code = patientInfo.code
		patient.name = patientInfo.name
		patient.gender = patientInfo.gender
		patient.age = patientInfo.age
		patient.weight = patientInfo.weight
		patient.position = patientInfo.position
		patient.projection = patientInfo.projection
		patient.fdd = patientInfo.fdd
		patient.kv = patientInfo.kv
		patient.ma = patientInfo.ma
		patient.s = patientInfo.s
		patient.mas = patientInfo.mas
		patient.skin = patientInfo.skin
		patient.dap = patientInfo.dap
		await patient.save()
		return response.status(201).json(patient)
	}
	async delete ({params, response}) {
		const patient = await patient.find(params.id)
		if (!student) {
			return response.status(404).json({data: 'Resource not found'})
		}
		await student.delete()
		return response.status(204).json(null)
	}
}

module.exports = PatientController
