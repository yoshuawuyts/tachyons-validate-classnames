const resolve = require('resolve')
const assert = require('assert')
const css = require('css')
const fs = require('fs')

module.exports = tachyonsValidateClass

// Validate if a CSS class name is a valid for Tachyons
// null -> null
function tachyonsValidateClass (cssClass) {
  const tachyons = generateTachyons()
  return tachyons.indexOf(cssClass) !== -1
}

function generateTachyons () {
  const path = resolve.sync('tachyons/css/tachyons.css', { basedir: __dirname })
  const file = fs.readFileSync(path, { encoding: 'utf8' })
  const ast = css.parse(file)
  console.log(Array.isArray(ast))
  ast.filter
  return []
}
