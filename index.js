// @flow
'use strict'

const hasOwnProperty = Object.prototype.hasOwnProperty

function typeCheck(a, b) {
  return typeof a === typeof b
}

function arrayCheck(a, b) {
  return Array.isArray(a) === Array.isArray(b)
}

module.exports = (target /*: Object */, ...sources /*: Object[] */) => {
  const to = Object(target)

  for (let from of sources) {
    from = Object(from)
    for (const key of Object.keys(from)) {
      if (hasOwnProperty.call(from, key)) {
        if (!typeCheck(to[key], from[key]) || !arrayCheck(to[key], from[key])) {
          to[key] = from[key]
        }
      }
    }
  }

  return to
}
