// .mjs extension required: eslint imports this file, Node doesn't read package.yaml, thinks it's CJS unless named .mjs
import typescriptParser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'
import typescriptConfig from 'typescript-eslint'

export default [
    {
        ignores: ['dist/'],
    },

    ...typescriptConfig.config(...typescriptConfig.configs.recommended),

    prettierConfig,

    {
        files: ['src/**/*.ts'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                tsconfigRootDir: '.',
                sourceType: 'module',
            },
        },
        rules: {
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_$' }],
        },
    },
]
