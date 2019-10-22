import AuthService from '../services/AuthService'

export default function AuthRoutes(router, db) {
  const collection = db.collection('users')
  const service = AuthService(collection)

  router.post('/register', async (req, res, next) => {
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }

    if (newUser.name && newUser.email && newUser.password) {
      const result = await service.register({ ...newUser, date: new Date().toISOString() })

      res.status(200).json({
        message: 'Success registering new user!',
        result: result
      })
    } else {
      res.status(404).json({
        message: 'Data is not complete!'
      })
    }
  })

  return router
}
