export default function ShoppingItemRoutes(router) {
  router.get('/shopping-items', (req, res) => {
    res.status(200).json({
      message: 'Shoopping item index page'
    })
  })
  
  return router
}
