const test = require('tape')
const onViewport = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(onViewport)
})
