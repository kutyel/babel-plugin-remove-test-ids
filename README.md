# babel-plugin-remove-test-ids

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[![Node version](https://img.shields.io/node/v/babel-plugin-remove-test-ids.svg?style=flat-square)](https://www.npmjs.org/package/babel-plugin-remove-test-ids)
[![Build Status](https://img.shields.io/travis/kutyel/babel-plugin-remove-test-ids/master.svg?style=flat-square)](https://travis-ci.org/kutyel/babel-plugin-remove-test-ids)
[![Coverage Status](https://img.shields.io/coveralls/kutyel/babel-plugin-remove-test-ids.svg?style=flat-square)](https://coveralls.io/github/kutyel/babel-plugin-remove-test-ids)
[![Dependency status](https://img.shields.io/david/kutyel/babel-plugin-remove-test-ids.svg?style=flat-square)](https://david-dm.org/kutyel/babel-plugin-remove-test-ids)
[![Dev Dependencies Status](https://img.shields.io/david/dev/kutyel/babel-plugin-remove-test-ids.svg?style=flat-square)](https://david-dm.org/kutyel/babel-plugin-remove-test-ids#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/babel-plugin-remove-test-ids.svg?style=flat-square)](https://www.npmjs.org/package/babel-plugin-remove-test-ids)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/flaviocorpa)

> Babel plugin to remove `data-test-id` attributes from the JSX

## Install

```bash
$ npm install babel-plugin-remove-test-ids --save
```

## Usage

**.babelrc**
```json
{
  "plugins": [
    "remove-test-ids"
  ]
}
```
with options
```json
{
  "plugins": [
    ['./index.js',
      {
        'attribute': 'data-custom-test-attr'
      }
    ]
  ]
}
```

## Motivation

In **React Alicante 2017**, [Forbes Lindsay](https://github.com/ForbesLindesay) gave a [talk](https://github.com/ForbesLindesay/end-to-end-testing-react-applications/blob/master/end%20to%20end%20testing%20react%20applications.pdf) about *"End to End testing React applications"* with [**cabbie**](https://github.com/ForbesLindesay/cabbie) and explained the pattern of adding `data-test-id` props to your components as a good practice for improving testability.

He also mentioned that it would be *"fairly easy to do a Babel plugin"* to strip those attributes from the actual DOM, if you care enough. :)

Also, other testing tools like Selenium uses a similar approach and could benefit from this plugin as well!

## License

MIT © [Flavio Corpa](https://github.com/kutyel).
