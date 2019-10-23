import bcrypt from 'bcrypt'
import objects from '../objects'

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
        return objects.ResponseObject('Success Registering new user!', false, result.ops)
      } catch (error) {
        return objects.ResponseObject('Something went wrong when registering new user', true, null)
      }
    },

    login: async function(loginData) {
      let user = null
      try {
        user = await collection.findOne({ email: loginData.email })
        if (!user) return objects.ResponseObject('Email does not exist', true, null)
      } catch (error) {
        return objects.ResponseObject(error, true, null)
      }

      try {
        const validPassword = await bcrypt.compare(loginData.password, user.password)
        if (!validPassword) return objects.ResponseObject('Wrong Password!', true, null)
      } catch (error) {
        return objects.ResponseObject(error, true, null)
      }

      return objects.ResponseObject('Success Logging In!', false, user)
    }
  }
}
