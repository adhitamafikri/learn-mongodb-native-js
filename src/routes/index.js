import { Router } from 'express'

export default function RouterStack() {
  const router = Router()

  router.get('/', (req, res) => {
    res.status(200).json({
      message: 'Bjir'
    })
  })

  return router
}
