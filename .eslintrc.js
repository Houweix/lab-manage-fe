module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/html-closing-bracket-newline': 'warning',
    'vue/max-attributes-per-line': 'warning',
    'vue/multiline-html-element-content-newline': 'warning',
    'vue/require-prop-types': 'warning'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
