import AuthRepository from '../repositories/AuthRepository'

export default function AuthService() {
  const repository = AuthRepository()

  return {
    register: function() {
      const result = repository.register()
      return result
    },

    login: function() {
      const result = repository.login()
      return result
    }
  }
}
