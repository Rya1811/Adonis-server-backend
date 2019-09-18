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
  return { greeting: 'Hello world eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImRhdGEiOnsiaWQiOjMsIm5hbWUiOiJVc2VyIDMiLCJlbWFpbCI6InUzQG1haWwuY29tIiwiYWNjZXNzIjoyLCJjcmVhdGVkX2F0IjoiMjAxOS0wOS0wMyAxNTozODo1NyIsInVwZGF0ZWRfYXQiOiIyMDE5LTA5LTAzIDE1OjM4OjU3In0sImlhdCI6MTU2NzQ5OTk0NX0.5Rx6EXTZkliZwQTMfZVLF7RZDAPIseZ93Y-4ZSbnunkin JSON' }
})
Route.group(() => {
  Route.post('user/register', 'UserController.store')
}).prefix('api').middleware(['auth',  'isAdmin'])

Route.post('api/user/login', 'AuthController.postLoginApi').middleware('guest')
Route.get('api/user/profile', 'Controller.getProfileApi').middleware('auth')

Route.group(() => {
	Route.get('patient/:id', 'PatientController.show')
	Route.post('patient/add', 'PatientController.store')
	Route.put('patient/update/:id', 'PatientController.update')
	Route.delete('patient/delete/:id', 'PatientController.delete')
  Route.get('user', 'UserController.index')
  Route.put('user/update/:id', 'UserController.update')
  Route.delete('user/delete/:id', 'UserController.destroy')
}).prefix('api').middleware(['auth', 'isSuper'])

Route.get('api/patient', 'PatientController.index')

Route.group(() => {
  Route.get('cekup', 'PatientController.index')
  Route.get('cekup/:id', 'PatientController.show')
  Route.post('cekup/add', 'PatientController.store')
  Route.put('cekup/update/:id', 'PatientController.update')
  Route.delete('cekup/delete/:id', 'PatientController.delete')
}).prefix('api')



