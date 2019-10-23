import jwt from 'jsonwebtoken'

export default function AuthMiddleware(req, res, next) {
  const token = req.header('x-access-token')
  if (!token) {
    res.status(401).json({
      message: 'Resource Cannot be accessed',
      error: true
    })
  }

  try {
    const verified = jwt.verify(token, process.env.TOKEN_KEY)
    req.user = verified
    next()
  } catch(error) {
    res.status(401).json({
      message: error,
      error: true
    })
  }
}
