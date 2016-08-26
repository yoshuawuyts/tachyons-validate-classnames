const test = require('tape')
const validate = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(validate)
})

test('should lint css', (t) => {
  t.plan(4)
  const ok = validate('.black { color: white }')
  t.deepEqual(ok.selectors, ['.black'], 'selectors ok')
  t.deepEqual(ok.failed, [], 'failed ok')
  const notOk = validate('.foo { color: blue }')
  t.deepEqual(notOk.selectors, ['.foo'], 'selectors ok')
  t.deepEqual(notOk.failed, ['.foo'], 'failed ok')
})
