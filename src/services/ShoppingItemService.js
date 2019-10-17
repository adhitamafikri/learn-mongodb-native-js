export function getShoppingItems(collection, queryLimit) {
  if (queryLimit) return collection.find().limit(queryLimit).toArray()
  return collection.find().toArray()
}
