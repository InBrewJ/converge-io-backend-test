const flattenObj = (obj, keyQueue = [], accObj = {}) => {
  // go through the keys with object keys
  // for each key, recursively see if that has any keys
  // store each of the string values key in a queue
  // then join values in the keyQueue if the last value isn't an object

  Object.keys(obj).forEach((key) => {
    const currentValue = obj[key]
    const isNotObject = typeof currentValue !== 'object'
    const isArray = Array.isArray(currentValue)

    if (isNotObject || isArray) {
      const newKey = [...keyQueue, key].join('.')
      accObj[newKey] = currentValue
    } else {
      flattenObj(obj[key], [...keyQueue, key], accObj)
    }
  })

  return accObj
}

module.exports = {
  flattenObj
}
