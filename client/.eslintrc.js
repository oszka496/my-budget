module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'airbnb',
    'prettier',
    'react-app'
  ],
  'plugins': [
    'prettier',
  ],
  'rules': {
    // airbnb
    'quote-props': [1, 'consistent-as-needed'],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': [0],

    // prettier
    'prettier/prettier': ['error', {
      'singleQuote': true,
      'trailingComma': 'es5'
    }],

    // react-app
    'jsx-a11y/href-no-hash': [0],
  },
}