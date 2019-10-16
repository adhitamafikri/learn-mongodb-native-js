import { Router } from 'express'
import HomeRoutes from './Home.route'
import ShoppingItemRoutes from './ShoppingItem.route'

export default function RouterStack() {
  const router = Router()

  const routes = [
    HomeRoutes(router),
    ShoppingItemRoutes(router)
  ]

  router.use(routes)

  return router
}
