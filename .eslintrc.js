/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  'extends': 'airbnb-base',
  'parser': 'babel-eslint',
  'parserOptions': {
      'ecmaVersion': 6,
      'sourceType': 'module',
      'ecmaFeatures': {
          'jsx': true,
          'modules': true,
          'experimentalObjectRestSpread': true
      }
  },
  'plugins': [
      'react', 'jest'
  ],
  'extends': ['eslint:recommended', 'plugin:react/recommended'],
};