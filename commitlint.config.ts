import type { UserConfig } from '@commitlint/types';

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'docs',
        'content',
        'ui',
        'home',
        'nav',
        'og',
        'search',
        'mdx',
        'styles',
        'config',
        'deps',
        'ci',
        'next',
        'scripts',
      ],
    ],
    'scope-empty': [1, 'never'],
  },
};

export default config;
