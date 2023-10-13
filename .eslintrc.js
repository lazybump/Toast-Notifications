module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'react-app',
        'react-app/jest',
        'prettier'
    ],
    rules: {
        // Add any additional ESLint rules or overrides here.
    }
};
