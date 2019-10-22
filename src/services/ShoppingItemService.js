import ShoppingItemRepository from '../repositories/ShoppingItemRepository'

/**
 * @param {mongodb.collection} collection
 */
export default function ShoppingItemService(collection) {
  const repository = ShoppingItemRepository(collection)

  return {
    getShoppingItems: async function(queryLimit) {
      const result = await repository.getShoppingItems(queryLimit)
      return result
    },
    addShoppingItems: async function(items) {
      const result = await repository.addShoppingItems(items)
      return result
    }
  }
}

// export default class ShoppingItemService {
//   getShoppingItems(collection, queryLimit) {
//     if (queryLimit) return collection.find().limit(queryLimit).toArray()
//     return collection.find().toArray()
//   }
//
//   addShoppingItems(collection, items) {
//     if (items) return collection.insertMany(items)
//     return Error('something went wrong')
//   }
// }

// export function getShoppingItems(collection, queryLimit) {
//   if (queryLimit) return collection.find().limit(queryLimit).toArray()
//   return collection.find().toArray()
// }
//
// export function addShoppingItems(collection, items) {
//   if (items) return collection.insertMany(items)
//   return Error('something went wrong')
// }
