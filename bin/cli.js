#!/usr/bin/env node
const concat = require('concat-stream')
const cliclopts = require('cliclopts')
const minimist = require('minimist')
const path = require('path')
const fs = require('fs')

const pkg = require('../package.json')
const main = require('../')

const opts = cliclopts([
  { name: 'help', abbr: 'h', boolean: true },
  { name: 'version', abbr: 'v', boolean: true }
])

const argv = minimist(process.argv.slice(2), opts.options())

// parse options
if (argv.version) {
  const version = require('../package.json').version
  process.stdout.write('v' + version + '\n')
  process.exit(0)
} else if (argv.help) {
  process.stdout.write(pkg.name + ' - ' + pkg.description + '\n')
  usage(0)
} else {
  var file = null
  if (argv._.length) {
    const location = argv._[0]
    file = fs.readFileSync(location, { encoding: 'utf8' })
  } else {
    process.stdin.pipe(concat((buf) => {
      file = String(buf)
    }))
  }
  const res = main(file)
  process.stdout.write(`Total selector count: ${res.selectors.length}\n`)
  process.stdout.write(`Invalid selector count: ${res.failed.length}\n`)
  if (res.failed.length) {
    process.stdout.write(`Invalid selectors:\n`)
    res.failed.forEach((rule, i) => {
      if (i !== 0) process.stdout.write(', ')
      process.stdout.write(rule)
    })
  }
}

// print usage & exit
// num? -> null
function usage (exitCode) {
  const rs = fs.createReadStream(path.join(__dirname, '/usage.txt'))
  const ws = process.stdout
  rs.pipe(ws)
  ws.on('finish', process.exit.bind(null, exitCode))
}
