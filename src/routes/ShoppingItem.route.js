import { getShoppingItems } from '../services/ShoppingItemService'

export default function ShoppingItemRoutes(router, db) {
  const collection = db.collection('items')

  router.get('/shopping-items', async (req, res, next) => {
    const result = await getShoppingItems(collection, 1)

    res.status(200).json({
      message: 'Success retrieved shopping items',
      result: result
    })
  })

  return router
}
