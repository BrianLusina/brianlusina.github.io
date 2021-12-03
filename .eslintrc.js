module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    document: true,
    navigator: true,
    window: true,
  },
  extends: [
    'airbnb',
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    // Allows for the parsing of modern ECMAScript features
    ecmaVersion: 2020,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      modules: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'prettier', 'react-hooks', '@typescript-eslint'],
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use
      version: 'detect',
      createClass: 'createClass',
    },
  },
  rules: {
    strict: 0,
    'no-use-before-define': 'off',
    // '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/no-named-as-default': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
    'prettier/prettier': 'warn',
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-did-update-set-state': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        varsIgnorePattern: 'error|_|e|^_$',
        argsIgnorePattern: '^own[p|P]rops$|^prev[s|S]tate$|^e$|^_$',
      },
    ],
    'class-methods-use-this': 0,
    'import/extensions': [
      'error',
      'never',
      {
        packages: 'always',
        css: 'always',
        scss: 'always',
        png: 'always',
        jpg: 'always',
        jpeg: 'always',
        svg: 'always',
        ttf: 'always',
        interface: 'always',
        styles: 'always',
        types: 'always',
        models: 'always',
        utils: 'always',
        props: 'always',
      },
    ],
    'linebreak-style': 0,
    'no-console': 0,
    'no-restricted-globals': 'warn',
    'prefer-destructuring': ['warn', { object: true, array: false }],
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'jsx-a11y/label-has-associated-control': 0,
    // No longer needed in React 17+
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-vars': 'error',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
      },
    ],
    'react/prefer-stateless-function': [
      1,
      {
        ignorePureComponents: true,
      },
    ],
    'react/display-name': [
      0,
      {
        ignoreTranspilerName: true,
      },
    ],
    'react/jsx-props-no-spreading': [
      0,
      {
        html: 0,
        custom: 0,
      },
    ],
    'react/require-default-props': [
      2,
      {
        forbidDefaultForRequired: true,
        ignoreFunctionalComponents: true,
      },
    ],
  },
};
