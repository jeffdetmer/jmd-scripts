const { ifAnyDep } = require('../utils');

module.exports = {
  extends: [
    require.resolve('eslint-config-shellthor'),
    require.resolve('eslint-config-shellthor/jest'),
    ifAnyDep('react', require.resolve('eslint-config-shellthor/jsx-a11y')),
    ifAnyDep('react', require.resolve('eslint-config-shellthor/react')),
    require.resolve('eslint-config-shellthor/prettier'),
    require.resolve('eslint-config-prettier'),
  ].filter(Boolean),
  rules: {
    // stuff I haven't gotten around to updating in my config
    'no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^ignored' },
    ],
    'func-style': 'off',
    'no-process-exit': 'off',
    'comma-dangle': 'off',
  },
};
