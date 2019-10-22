export default function AuthRepository() {
  return {
    register: function() {
      console.log('register')
      return 'slatt'
    },

    login: function() {
      console.log('login')
      return 'slatt'
    }
  }
}
