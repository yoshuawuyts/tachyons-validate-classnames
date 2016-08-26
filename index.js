const resolve = require('resolve')
const assert = require('assert')
const css = require('css')
const fs = require('fs')

const route = resolve.sync('tachyons/css/tachyons.css', { basedir: __dirname })
const file = fs.readFileSync(route, { encoding: 'utf8' })
const tachyons = parseSelectors(file)

module.exports = tachyonsValidateClass

// Validate if a CSS string contains valid selectors
// str -> obj
function tachyonsValidateClass (targetCss) {
  assert.equal(typeof targetCss, 'string', 'tachyons-validate-class: css must be a string')
  const res = {}
  const selectors = parseSelectors(targetCss)
  res.selectors = selectors
  res.failed = selectors.filter((s) => tachyons.indexOf(s) === -1)
  return res
}

// parse css into an array of selectors
// str -> [str]
function parseSelectors (str) {
  const ast = css.parse(str)
  const selectors = ast.stylesheet.rules
    .filter((el) => el.type === 'rule')
    .reduce((arr, el) => arr.concat(el.selectors), [])
  return selectors
}
