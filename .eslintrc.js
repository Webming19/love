module.exports = {
  extends: '@antfu',
  rules: {
    // 'max-len': ['error', { code: 120 }],
    // 'no-undef': ['warn', 'always'],
    'no-console': 'warn',
    // 使用单引号
    'semi': ['error', 'always'],
    'semi-spacing': ['error', { before: false, after: true }],
    // ts分号设置
    '@typescript-eslint/semi': ['error', 'always'],
    // 定义类型使用type 而不是interface
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: { delimiter: 'semi', requireLast: true },
        singleline: { delimiter: 'semi', requireLast: true },
        multilineDetection: 'brackets',
      },
    ],
    // 大括号风格与编程中的缩进风格
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
  },
};
