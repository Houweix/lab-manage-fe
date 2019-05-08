module.exports = {
  root: true,
  'extends': [
    'plugin:vue/essential'
  ],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': 'off',
    'vue/no-parsing-error': [2, {
      'x-invalid-end-tag': false
    }],
    'no-undef': 'off',
    'camelcase': 'off',
    'indent': [2, 2],
    'semi': 'off',
    'space-before-function-paren': [0, 'always'],
    "object-curly-spacing": 'off',
    "quotes": 'off',
    "x-invalid-end-tag": 'off'
    // "eslint-disable-next-line": 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
