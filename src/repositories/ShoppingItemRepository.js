export default function ShoppingItemRepository() {
  return {
    getShoppingItems: async function(collection, queryLimit) {
      if (queryLimit) {
        try {
          const result = await collection.find().limit(queryLimit).toArray()
          return result
        } catch (error) {
          throw error
        }
      }

      try {
        const result = await collection.find().toArray()
        return result
      } catch (error) {
        throw error
      }
    },

    addShoppingItems: async function(collection, items) {
      if (items) {
        try {
          const result = await collection.insertMany(items)
          return result
        } catch (error) {
          throw error
        }
      }
      return Error('You dont have any items to add')
    }
  }
}
