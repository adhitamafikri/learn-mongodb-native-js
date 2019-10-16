import express from 'express'
import bodyParser from 'body-parser'
import 'dotenv/config'

import MongoDBUtil from './database/mongodb'
import appRouter from './routes'

const app = express()

app.use(bodyParser.json())

// Connect to DB
const mongo = MongoDBUtil()
const client = mongo.connect()

// Routes
app.use('/mongojs/v1', appRouter())


app.listen('5001', () => {
  console.log('Running on 5001')
})
