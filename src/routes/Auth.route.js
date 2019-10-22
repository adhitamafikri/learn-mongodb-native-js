import AuthService from '../services/AuthService'

export default function AuthRoutes(router, db) {
  const collection = db.collection('users')
  const service = AuthService(collection)

  // POST:register
  router.post('/register', async (req, res, next) => {
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }

    if (newUser.name && newUser.email && newUser.password) {
      const {error, result} = await service.register(newUser)
      if (error) {
        res.status(400).json({
          message: error,
          result: null
        })
      }
      res.status(200).json({
        message: 'Success registering new user!',
        result: result
      })
    } else {
      res.status(400).json({
        message: 'Data is not complete!',
        result: null
      })
    }
  })

  // POST:login
  router.post('/login', async (req, res, next) => {
    const loginData = {
      email: req.body.email,
      password: req.body.password
    }

    if (loginData.email && loginData.password) {
      const { error, result } = await service.login(loginData)
      if (error) {
        res.status(400).json({
          message: error,
          result: null
        })
      }
      res.status(200).json({
        message: 'Success logged in',
        result: result
      })
    } else {
      res.status(400).json({
        message: 'Data is not complete!',
        result: null
      })
    }
  })

  return router
}
