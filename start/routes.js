'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
Route.group(() => {
	Route.post('students', 'StudentController.store')})
.prefix('api/v1')

Route.group(() => {
	Route.get('students', 'StudentController.index')
	Route.get('students/:id', 'StudentController.show')
	Route.post('students', 'StudentController.store')
	Route.put('students/:id', 'StudentController.update')
	Route.delete('students/:id', 'StudentController.delete')})
.prefix('api/api')

Route.post('api/api/login', 'AuthController.postLoginApi').middleware('auth')
Route.post('api/api/register', 'AuthController.store').middleware('guest')
Route.get('api/api/profile', 'AuthController.getProfileApi').middleware('auth')

Route.group(() => {
	Route.get('patient', 'PatientController.index')
	Route.get('patient/:id', 'PatientController.show')
	Route.post('patient', 'PatientController.store')
	Route.put('patient/:id', 'PatientController.update')
	Route.delete('patient/:id', 'PatientController.delete')
}).prefix('api')




