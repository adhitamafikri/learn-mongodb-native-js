import HomeRoutes from './Home.route'
import ShoppingItemRoutes from './ShoppingItem.route'

/**
 * @param {express.Router} router
 * @param {mongodb.MongoClient} client
 * @return {express.Router}
 */
export default function RouterStack(router, client) {
  const db = client.db('mern-shopping')

  const routes = [
    HomeRoutes(router),
    ShoppingItemRoutes(router, db)
  ]

  router.use(routes)

  return router
}
