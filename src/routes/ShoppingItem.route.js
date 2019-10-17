import ShoppingItemService from '../services/ShoppingItemService'

export default function ShoppingItemRoutes(router, db) {
  const collection = db.collection('items')
  const service = ShoppingItemService()

  router.get('/shopping-items', async (req, res, next) => {
    const result = await service.getShoppingItems(collection, 3)

    res.status(200).json({
      message: 'Success retrieved shopping items',
      result: result
    })
  })

  return router
}
