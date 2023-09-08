module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
  },
  rules: {
    camelcase: 'off',
      'max-len': [
        'error',
        {
          code: 125,
        },
      ],
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-no-duplicate-props': 'off',
      'no-return-assign': 'off',
      'no-console': 1,
      'default-param-last': 'off',
      'global-require': 0,
      'import/prefer-default-export': 'off',
      'no-use-before-define': [
        'error',
        {
          variables: false,
          functions: false,
        },
      ],
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.jsx', '.tsx'],
        },
      ],
      'react/forbid-prop-types': 0,
      'react/require-default-props': 0,
      'arrow-body-style': 0,
      'linebreak-style': 0,
      '@typescript-eslint/no-unused-vars': ["error", { "argsIgnorePattern": "^_" }],
      quotes: [
        2,
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      semi: ['error', 'always'],
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/restrict-template-expressions': 'warn',
      '@typescript-eslint/require-await': 'warn',
      'no-constant-condition': 'warn',
  },
}
