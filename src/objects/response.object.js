/**
 * @param {String | Object} message
 * @param {Boolean} error
 * @param {Object} result
 * @return {Object}
 */
export default function ResponseObject(
  message,
  error,
  result
) {
  return {
    message,
    error,
    result
  }
}
