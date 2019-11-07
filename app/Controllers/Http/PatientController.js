'use strict'

const Patient = use('App/Models/Patient')

class PatientController {
  async index ({ request, response }) {
    const patient = await Patient.query()
      .with('checkup')
      .fetch()
    return response.json(patient)
  }

  async store ({ request, response }) {
    const data = request.only(['code', 'name', 'gender', 'age'])
    const patient = await Patient.create(data)
    return response.ok({
      data: patient
    })
    return response.status(201).json(patient)
  }

  async show ({ request, response, params: { patient_id, id } }) {
    const patient = await Patient.findByOrFail('id', patient_id)
    const checkup = await patient
      .checkups()
      .where('id', id)
      .fetch()
    return response.ok({
      data: checkup.row[0]
    })
  }

  async update ({ params, request, response }) {
    const data = request.only(['name', 'gender', 'age'])
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
