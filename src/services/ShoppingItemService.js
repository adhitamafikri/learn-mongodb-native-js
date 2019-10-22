import ShoppingItemRepository from '../repositories/ShoppingItemRepository'

export default function ShoppingItemService() {
  const repository = ShoppingItemRepository()

  return {
    getShoppingItems: async function(collection, queryLimit) {
      const result = await repository.getShoppingItems(collection, queryLimit)
      return result
    },
    addShoppingItems: async function(collection, items) {
      const result = await repository.addShoppingItems(collection, items)
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
