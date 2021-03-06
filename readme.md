# typed-assign
[![Build Status](https://travis-ci.org/akameco/typed-assign.svg?branch=master)](https://travis-ci.org/akameco/typed-assign)
[![Coverage Status](https://coveralls.io/repos/github/akameco/typed-assign/badge.svg?branch=master)](https://coveralls.io/github/akameco/typed-assign?branch=master)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)

> Object.assign, Overwrite when TYPE mismatch


## Install

```
$ npm install typed-assign
```

## Usage

```js
const typedAssign = require('typed-assign');

typedAssign({ foo: 1 }, { bar: 1 })
//=> { foo:1, bar: 1 }

typedAssign({ foo: 'hello' }, { foo: 1 })
// => { foo: 1 }

typedAssign({ foo: 1 }, { foo: 100 })
// => { foo: 1 }

typedAssign({ foo: [] }, { foo: {} })
// => { foo: {} }

typedAssign({ foo: 0 }, { bar: 'hello' }, { bar: 2 })
// => { foo: 0, bar: 1 }
```

## API

### `typedAssign(target: Object, ...sources: Array<?Object>)`
Assigns enumerable own properties of `source` objects to the `target` object and returns the `target` object. Additional `source` objects will overwrite previous ones.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub>akameco</sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/typed-assign/commits?author=akameco "Code") [📖](https://github.com/akameco/typed-assign/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/typed-assign/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") | [<img src="https://avatars0.githubusercontent.com/u/6993514?v=4" width="100px;"/><br /><sub>HANATANI Takuma</sub>](https://potato4d.me)<br />[📖](https://github.com/akameco/typed-assign/commits?author=potato4d "Documentation") |
| :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
