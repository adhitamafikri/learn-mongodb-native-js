/**
 * @param {String | Object} message
 * @param {Boolean} error
 * @param {Object} data
 * @return {Object}
 */
export default function ResponseObject(
  message,
  error,
  data
) {
  return {
    message,
    error,
    data
  }
}
