// @flow
const typedAssign = require('.')

test('check defined', () => {
  expect(typedAssign).toBeDefined()
})

test('typedAssign own enumerable properties from source to target object', () => {
  expect(typedAssign({ foo: 1 }, { bar: 1 })).toEqual({ foo: 1, bar: 1 })
  expect(typedAssign({ foo: 1 }, null, undefined)).toEqual({ foo: 1 })
  expect(typedAssign({ foo: 1 }, null, undefined, { bar: 1 }, null)).toEqual({
    foo: 1,
    bar: 1
  })
})

test('overwrite when type mismatch', () => {
  expect(typedAssign({ foo: 0 }, { foo: 'hello' })).toEqual({ foo: 'hello' })
  expect(typedAssign({ foo: 'hello' }, { foo: 1 })).toEqual({ foo: 1 })
  expect(typedAssign({ foo: true }, { foo: 1 })).toEqual({ foo: 1 })
  expect(typedAssign({ foo: 1 }, { foo: { bar: 1 } })).toEqual({
    foo: { bar: 1 }
  })
  expect(typedAssign({ foo: [] }, { foo: 1 })).toEqual({ foo: 1 })
  expect(typedAssign({ foo: {} }, { foo: [] })).toEqual({ foo: [] })
  expect(typedAssign({ foo: [] }, { foo: {} })).toEqual({ foo: {} })
})

test('no overwrite when type match', () => {
  expect(typedAssign({ foo: 0 }, { foo: 100 })).toEqual({ foo: 0 })
  expect(typedAssign({ foo: true }, { foo: false })).toEqual({ foo: true })
  expect(typedAssign({ foo: 'hello' }, { foo: 'world' })).toEqual({
    foo: 'hello'
  })
})

test('support multiple sources', () => {
  expect(typedAssign({ foo: 0 }, { bar: 1 }, { bar: 2 })).toEqual({
    foo: 0,
    bar: 1
  })
  expect(typedAssign({}, {}, { foo: 1 })).toEqual({ foo: 1 })
})

test('only iterate own keys', () => {
  const Unicorn = function() {}
  Unicorn.prototype.rainbows = 'many'
  const unicorn = new Unicorn()
  unicorn.bar = 1

  expect(typedAssign({ foo: 1 }, unicorn)).toEqual({
    foo: 1,
    bar: 1
  })
})

test('support `Object.create(null)` objects', () => {
  const obj = Object.create(null)
  obj.foo = true
  expect(typedAssign({}, obj)).toEqual({ foo: true })
})

test('return the modified target object', () => {
  const target = {}
  const returned = typedAssign(target, { a: 1 })
  expect(returned).toBe(target)
})

test('not throw on null/undefined sources', () => {
  expect(() => {
    typedAssign({}, null)
  }).not.toThrow()
  expect(() => {
    typedAssign({}, undefined)
  }).not.toThrow()
  expect(() => {
    typedAssign({}, null, undefined)
  }).not.toThrow()
})

test('not support deep assign', () => {
  expect(typedAssign({}, { foo: { bar: 1 } })).toEqual({ foo: { bar: 1 } })
  expect(typedAssign({ foo: { bar: 2 } }, { foo: { bar: 'hello' } })).toEqual({
    foo: { bar: 2 }
  })
})
