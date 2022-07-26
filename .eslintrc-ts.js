module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:import/typescript',
    'plugin:import/warnings',
    // TODO: Enable eventually when all are fixed
    // 'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    // TODO: Enable eventually when all are fixed
    // 'plugin:testing-library/react',
    // 'plugin:jest-dom/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', '@typescript-eslint', 'testing-library', 'jest-dom'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/no-children-prop': 'warn',
    'react/prop-types': 'off',
    'react/jsx-no-target-blank': 'off',

    'import/no-named-as-default': 'off',

    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/no-onchange': 'off',
    'jsx-a11y/no-autofocus': 'off',

    quotes: [2, 'single', { avoidEscape: true }],
    'comma-dangle': [2, 'always-multiline'],

    // These need to be fixed/enabled
    'react/no-unescaped-entities': 'off',
    'jsx-a11y/img-redundant-alt': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
  },
  overrides: [
    {
      files: ['src/**'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      plugins: ['jest'],
    },
    {
      files: ['tests/**'],
      extends: ['plugin:cypress/recommended'],
      plugins: ['cypress'],
    },
  ],
}
