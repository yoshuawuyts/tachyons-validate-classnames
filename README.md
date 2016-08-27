# tachyons-validate-classnames [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

Validate if a CSS class name is valid for Tachyons. Useful to validate
Tachyons overrides are valid.

## Usage
```js
const validate = require('tachyons-validate-class')

validate('.black { color: white }')
// => { selectors: ['.black'], failed: [] }

validate('.foo { color: white }')
// => { selectors: ['.foo'], failed: ['.foo'] }
```

## CLI
```txt
Usage: tachyons-validate-classnames [options] [filename]

Options:
  -h, --help        Output usage information
  -v, --version     Output version number

Examples:
  $ tachyons-validate-classnames ./bundle.css  # Validate a file
  $ curl foobar.com/bundle.css | tachyons-validate-classnames  # Validate stdin
```

Docs: https://github.com/yoshuawuyts/tachyons-validate-class
Bugs: https://github.com/yoshuawuyts/tachyons-validate-class/issues

## API
### validate(css)
Validate a string of CSS. Returns all selectors and all failed selectors.

## Installation
```sh
$ npm install tachyons-validate-class
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/tachyons-validate-class.svg?style=flat-square
[3]: https://npmjs.org/package/tachyons-validate-class
[4]: https://img.shields.io/travis/yoshuawuyts/tachyons-validate-class/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/tachyons-validate-class
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/tachyons-validate-class/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/tachyons-validate-class
[8]: http://img.shields.io/npm/dm/tachyons-validate-class.svg?style=flat-square
[9]: https://npmjs.org/package/tachyons-validate-class
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
