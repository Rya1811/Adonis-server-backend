'use strict'

const Checkup = use('App/Models/Checkup')
const Patient = use('App/Models/Patient')

class CheckupController {
  async index ({ request, response, params }) {
    const checkup = await Checkup
      .query()
      .where('code', patient_id)
      .paginate(requirest.input('page'), 10)

    return response.ok({
      ...checkup.toJSON()
    })
  }

  $storeAttribute (request) {
    return request.only([
      'code', 'weight', 'position',
      'projection', 'fdd', 'kv',
      'ma', 's', 'mas', 'skin', 'dap'
    ])
  }

  async store ({ request, response, auth, params: { patient_id, id } }) {
    const data = this.$storeAttribute(request)
    const checkup = await patient
      .Checkup()
      .create({ data })
    return response.ok({
      data: checkup
    })
  }

  async show ({ request, response, params: { patient_id, id } }) {
    const checkup = await patient
      .Checkup()
      .where('id', id)
      .fetch()
    return response.ok({
      data: checkup.row[0]
    })
  }

  $updateAttribute (request) {
    return request.only([
      'weight', 'position', 'projection', 'fdd', 'kv', 'ma', 's', 'mas'
    ])
  }

  async update ({ request, response, params: { patient_id, id } }) { // eslint-disable-line camelcase
    await patient
      .checkups()
      .where('id', id)
      .update(this.$updateAttribute(request))
    return response.noContent()
  }

  async destroy ({ request, response, params: { patient_id, id } }) { // eslint-disable-line camelcase
    const patient = await Patient.findByOrFail('code', patients_id)
    await patient
      .checkups()
      .where('id', id)
      .delete()
    return response.noContent()
  }
}

module.exports = CheckupController
