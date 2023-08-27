module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    '@typescript-eslint/no-unused-vars': 1,
    'react-hooks/exhaustive-deps': 0,
    curly: 0,
    'react-hooks/rules-of-hooks': ['warn'],
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
  },
};
