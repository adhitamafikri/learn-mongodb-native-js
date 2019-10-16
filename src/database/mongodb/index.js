import { MongoClient } from 'mongodb'

const DB_URI = process.env.MONGODB_ATLAS_URI

export default function MongoDB() {
  return {
    connect: async function() {
      console.log('connecting to mongoDB', DB_URI)
      const client = new MongoClient(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

      try {
        await client.connect()
        return client
      } catch(err) {
        console.log(err)
        throw err
      }
    },

    disconnect: async function(client) {
      console.log('disconnecting from DB')
      await client.disconnect()
    }
  }
}
