module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'airbnb',
    'react-app'
  ],
  'rules': {
    // airbnb
    'quote-props': [1, 'consistent-as-needed'],
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 0,
    'import/prefer-default-export': 0,
    'class-methods-use-this': 0,
    'max-len': [1, 120],
    'arrow-parens': 0,
    'object-curly-newline': 0,
    'implicit-arrow-linebreak': 0,

    // react-app
    'jsx-a11y/href-no-hash': 0,
  },
}
