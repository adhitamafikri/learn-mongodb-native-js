import AuthMiddleware from '../middlewares/auth'
import ShoppingItemService from '../services/ShoppingItemService'

/**
 * @param {express.Router} router
 * @param {mongodb.db} db
 */
export default function ShoppingItemRoutes(router, db) {
  const collection = db.collection('items')
  const service = ShoppingItemService(collection)

  // GET:shopping-items
  router.get('/shopping-items', AuthMiddleware, async (req, res, next) => {
    const result = await service.getShoppingItems()
    if (result.error) {
      res.status(400).json({ ...result })
    }
    res.status(200).json({ ...result })
  })

  // POST:shopping-items
  router.post('/shopping-items', async (req, res, next) => {
    const items = req.body.items

    if (items) {
      const result = await service.addShoppingItems(items)

      if (result.error) {
        res.status(400).json({ ...result })
      }
      res.status(200).json({ ...result })
    }
    res.status(400).json({
      message: 'Item is incomplete',
      error: true,
      data: null
    })
  })

  return router
}

// import ShoppingItemService from '../services/ShoppingItemService'
//
// export default function ShoppingItemRoutes(router, db) {
//   const collection = db.collection('items')
//   const service = new ShoppingItemService()
//
//   router.get('/shopping-items', async (req, res, next) => {
//     const result = await service.getShoppingItems(collection)
//
//     res.status(200).json({
//       message: 'Success retrieved shopping items',
//       result: result
//     })
//   })
//
//   router.post('/shopping-items', async (req, res, next) => {
//     const items = req.body.items
//     console.log(items)
//     const result = await service.addShoppingItems(collection, items)
//
//     res.status(200).json({
//       message: 'Success adding shopping items',
//       items: items,
//       result: result
//     })
//   })
//
//   return router
// }

// import * as ShoppingItemService from '../services/ShoppingItemService'
//
// export default function ShoppingItemRoutes(router, db) {
//   const collection = db.collection('items')
//   const service = ShoppingItemService
//
//   router.get('/shopping-items', async (req, res, next) => {
//     const result = await service.getShoppingItems(collection)
//
//     res.status(200).json({
//       message: 'Success retrieved shopping items',
//       result: result
//     })
//   })
//
//   router.post('/shopping-items', async (req, res, next) => {
//     const items = req.body.items
//     console.log(items)
//     const result = await service.addShoppingItems(collection, items)
//
//     res.status(200).json({
//       message: 'Success adding shopping items',
//       items: items,
//       result: result
//     })
//   })
//
//   return router
// }
