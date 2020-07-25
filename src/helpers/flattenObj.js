const flattenObj = (obj = {}, keyQueue = [], accObj = {}) => {
  // go through the keys with object keys
  // for each key, recursively see if that has any keys
  // store each of the string values key in a queue
  // then join values in the keyQueue if the last value isn't an object

  if (!obj) {
    return {}
  }

  Object.keys(obj).map((key) => {
    const currentValue = obj[key]
    const keyIsNotObject = !!(typeof currentValue !== 'object')
    const keyIsArray = !!Array.isArray(currentValue)
    const prefixLog = [...keyQueue, key]

    // Base case - we've reach a 'value'
    // at the end of some nested keys
    if (keyIsNotObject || keyIsArray) {
      const newKey = prefixLog.join('.')
      accObj[newKey] = currentValue
      return
    }

    flattenObj(obj[key], prefixLog, accObj)
  })

  return accObj
}

module.exports = {
  flattenObj
}
