/**
 * @param {mongodb.collection} collection
 */
export default function AuthRepository(collection) {
  return {
    register: async function(user) {
      try {
        const result = await collection.insertOne(user)
        return result.ops
      } catch (error) {
        throw error
      }
    },

    login: function() {
      console.log('login')
      return 'slatt'
    }
  }
}
