import objects from '../objects'

/**
 * @param {mongodb.collection} collection
 */
export default function ShoppingItemRepository(collection) {
  return {
    getShoppingItems: async function(queryLimit) {
      if (queryLimit) {
        try {
          const result = await collection.find().limit(queryLimit).toArray()
          return objects.ResponseObject('Query Success!', false, result)
        } catch (error) {
          return objects.ResponseObject('Somwthing went wrong', true, null)
        }
      }

      try {
        const result = await collection.find().toArray()
        return objects.ResponseObject('Query Success!', false, result)
      } catch (error) {
        return objects.ResponseObject('Somwthing went wrong', true, null)
      }
    },

    addShoppingItems: async function(items) {
      try {
        const result = await collection.insertMany(items)
        return objects.ResponseObject('Query Success!', false, result)
      } catch (error) {
        return objects.ResponseObject('Somwthing went wrong', true, null)
      }
    }
  }
}
