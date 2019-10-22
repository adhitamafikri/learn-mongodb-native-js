import bcrypt from 'bcrypt'

/**
 * @param {mongodb.collection} collection
 */
export default function AuthRepository(collection) {
  return {
    register: async function(user) {
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(user.password, salt)
      try {
        const result = await collection.insertOne({
          ...user,
          password: hashedPassword,
          date: new Date().toISOString()
        })
        return { error: '', result: result.ops }
      } catch (error) {
        throw error
      }
    },

    login: async function(loginData) {
      try {
        const user = await collection.findOne({ email: loginData.email })
        if (!user) return { error: 'Email does not exist', result: null }

        const validPassword = await bcrypt.compare(loginData.password, user.password)
        if (!validPassword) return { error: 'Password is invalid!', result: null }

        return { error: '', result: user }
      } catch (error) {
        throw error
      }
    }
  }
}
