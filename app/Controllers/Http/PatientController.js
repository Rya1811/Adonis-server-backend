'use strict'

const Patient = use('App/Models/Patient')
const Database = use('Database')

class PatientController {
  async index ({ request, response }) {
    const recentCheckup = await Database
      .select('*')
      .from('patients')
      .innerJoin(
        Database
          .table('checkups')
          .distinct(Database.raw('FROM (patient_id) *'))
          .orderBy('patient_id')
          .as('c'),
          'patients.patient_id',
          'c.patient_id'
      )
      .orderBy('c.created_at', 'desc')
      return response.json(recentCheckup)
  }

  async store ({ request, response }) {
    const data = request.only(['code', 'name', 'gender', 'age'])
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
