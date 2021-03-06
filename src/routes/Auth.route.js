import jwt from 'jsonwebtoken'
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
      const result = await service.register(newUser)
      if (result.error) {
        res.status(400).json({ ...result })
      }
      res.status(200).json({ ...result })
    } else {
      res.status(400).json({
        message: 'Data is not complete!',
        error: true,
        data: null
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
      const result = await service.login(loginData)
      if (result.error) {
        res.status(400).json({ ...result })
      }

      // Create and assign a token
      const token = jwt.sign({ _id: result.data._id }, process.env.TOKEN_KEY)

      res.header('x-access-token', token).status(200).json({ ...result })
    } else {
      res.status(400).json({
        message: 'Data is not complete!',
        error: true,
        data: null
      })
    }
  })

  return router
}
