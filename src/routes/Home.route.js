export default function HomeRoutes(router) {
  router.get('/', (req, res) => {
    res.status(200).json({
      message: 'Home page'
    })
  })

  return router
}
