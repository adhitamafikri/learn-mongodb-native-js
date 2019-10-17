export default function ShoppingItemService() {
  return {
    getShoppingItems: function(collection, queryLimit) {
      if (queryLimit) return collection.find().limit(queryLimit).toArray()
      return collection.find().toArray()
    }
  }
}
