'use strict'

const Checkup = use('App/Models/Checkup')
const Patient = use('App/Models/Patient')

class CheckupController {
  async index ({ request, response, params:{ patient_id }}) {
    const checkup = await Checkup.query().where('code_patient', 'patient_id').paginate(requirest.input('page'),10)

    return response.ok({...checkup.toJSON()})
  }

  $storeAttribute (request)
  {
    return request.only(['code', 'weight', 'position', 'projection', 'fdd', 'kv', 'ma', 's', 'mas', 'skin', 'dap'])
  }

  async store ({ request, response, auth, params:{ patient_id }}) {
    const data = this.$storeAttribute(request)
    const patient = await Patient.findByOrFail('code', 'patient_id')
    const checkup = await patient.Checkup().create({ user_id:auth.current.user.id, ...data })
    return response.ok({ data: checkup })
  }
}

module.exports = CheckupController
