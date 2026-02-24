const baseConfig = require('@kristijorgji/eslint-config-typescript');

module.exports = [
    ...baseConfig,
    {
        ignores: ['dist/', 'coverage/', 'node_modules/'],
    },
    // Allow devDependencies (e.g. vitest) in test files; the base config forbids them elsewhere.
    {
        files: ['**/*.test.ts', '**/__tests__/**/*.ts'],
        rules: {
            'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        },
    },
];
