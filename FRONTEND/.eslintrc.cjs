module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintignore'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } },
  rules: {
    'react/react-in-jsx-scope': 'off'
  }
}
