import { react } from '@tarsilla/eslint-config';

const config = react({
  ignores: ['**/.vscode/', '**/node_modules/', '**/lib/', '**/.storybook/', '**/storybook-static/'],
});
export default config;
