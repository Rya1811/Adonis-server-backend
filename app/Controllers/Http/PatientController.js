'use strict'

const Patient = use('App/Models/Patient')

class PatientController {
  async index ({ request, response }) {
    const patient = await Patient
    	.with('checkups')
      .query()
      .fetch()
      .paginate(request.input('page'), 10)
    return response.ok({
      ...patient.toJSON()
    })
  }

  async store ({ request, response }) {
    const data = request.only(['code', 'name', 'gender', 'age', 'weight'])
    const patient = await Patient.create(data)
    return response.ok({
      data: patient
    })
    return response.status(201).json(patient)
  }

  async show ({ params, response }) {
    const patient = await Patient.find(params.id)
    return response.json(patient)
  }

  async update ({ params, request, response }) {
    const data = request.only(['name', 'gender', 'age', 'weight'])
    const patient = await Patient.findByOrFail('code', id)
    patient.merge(data)
    await patient.save()
    return response.noContent()
  }

  async delete ({ params, response }) {
    const patient = await patient.find(params.id)
    if (!patient) {
      return response.status(404).json({ data: 'Resource not found' })
    }
    await patient.delete()
    return response.status(204).json(null)
  }
}

module.exports = PatientController
