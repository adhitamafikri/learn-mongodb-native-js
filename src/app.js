import express from 'express'
import bodyParser from 'body-parser'
import 'dotenv/config'

import MongoDBUtil from './database/mongodb'
import RouterStack from './routes'

const app = express()
const router = express.Router()

app.use(bodyParser.json())

// Connect to DB
const mongo = MongoDBUtil()
const mongoConnection = mongo.connect()

mongoConnection
  .then(client => {
    // Routes
    app.use('/mongojs/v1', RouterStack(router, client))
  })
  .catch(err => {
    throw err
  })

app.listen('5001', () => {
  console.log('Running on 5001')
})
