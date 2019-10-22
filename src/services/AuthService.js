import AuthRepository from '../repositories/AuthRepository'

/**
 * @param {mongodb.collection} collection
 */
export default function AuthService(collection) {
  const repository = AuthRepository(collection)

  return {
    register: async function(user) {
      const result = await repository.register(user)
      return result
    },

    login: function() {
      const result = repository.login()
      return result
    }
  }
}
