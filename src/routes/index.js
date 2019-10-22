import HomeRoutes from './Home.route'
import ShoppingItemRoutes from './ShoppingItem.route'
import AuthRoutes from './Auth.route'

/**
 * @param {express.Router} router
 * @param {mongodb.MongoClient} client
 * @return {express.Router}
 */
export default function RouterStack(router, client) {
  const db = client.db('mern-shopping')

  const routes = [
    // AuthRoutes(router, db),
    HomeRoutes(router),
    ShoppingItemRoutes(router, db)
  ]

  router.use(routes)

  return router
}
