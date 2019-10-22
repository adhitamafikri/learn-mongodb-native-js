import ShoppingItemService from '../services/ShoppingItemService'

export default function ShoppingItemRoutes(router, db) {
  const collection = db.collection('items')
  const service = ShoppingItemService()

  router.get('/shopping-items', async (req, res, next) => {
    const result = await service.getShoppingItems(collection)

    res.status(200).json({
      message: 'Success retrieved shopping items',
      result: result
    })
  })

  router.post('/shopping-items', async (req, res, next) => {
    const items = req.body.items
    const result = await service.addShoppingItems(collection, items)

    res.status(200).json({
      message: 'Success adding shopping items',
      items: items,
      result: result
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
