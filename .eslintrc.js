const OFF = 0;
// const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    JSX: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'simple-import-sort', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': OFF,
    'no-void': OFF,
    '@typescript-eslint/no-use-before-define': ERROR,

    'prettier/prettier': ERROR,
    // ESLint rules
    'no-underscore-dangle': OFF,
    'arrow-parens': [ERROR, 'as-needed'],
    'no-nested-ternary': OFF,
    'import/prefer-default-export': OFF,
    'import/extensions': [ERROR, 'never'],
    'import/no-unresolved': ERROR,
    'import/no-extraneous-dependencies': [
      ERROR,
      {
        devDependencies: true,
        packageDir: ['.', __dirname],
      },
    ],

    // Sorting rules
    'sort-imports': OFF,
    'import/order': OFF,
    'import/first': ERROR,
    'import/no-duplicates': ERROR,
    'simple-import-sort/imports': ERROR,
    'simple-import-sort/exports': ERROR,
    'import/newline-after-import': ['error', { count: 1 }],

    // TypeScript rules
    'no-unused-vars': 'off', // disable the native no-unused-vars so that only the TS one is enabled
    '@typescript-eslint/no-unused-vars': ERROR,
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/no-explicit-any': [ERROR, { fixToUnknown: true }],

    // React rules
    'react/require-default-props': OFF,
    'react/prop-types': OFF, // otherwise creates false alerts in TS code
    'react/jsx-props-no-spreading': OFF,
    'react/destructuring-assignment': OFF,
    'react/jsx-filename-extension': [
      ERROR,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-curly-newline': OFF,
    'react/jsx-uses-react': [ERROR],
    'react/react-in-jsx-scope': OFF,
  },
};
