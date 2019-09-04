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
  Route.post('register', 'AuthController.store')})
.prefix('api').middleware(['auth',  'isAdmin'])

Route.post('api/user/login', 'AuthController.postLoginApi').middleware('guest')
Route.get('api/user/profile', 'AuthController.getProfileApi').middleware('auth')

Route.group(() => {
	Route.get('patient', 'PatientController.index')
	Route.get('patient/:id', 'PatientController.show')
	Route.post('patient', 'PatientController.store')
	Route.put('patient/:id', 'PatientController.update')
	Route.delete('patient/:id', 'PatientController.delete')
  Route.get('user', 'AuthController.index')
}).prefix('api').middleware(['auth', 'isSuper'])



