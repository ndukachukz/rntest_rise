module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    '@typescript-eslint/no-unused-vars': 1,
    'react-hooks/exhaustive-deps': 0,
    curly: 0,
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
  },
};
