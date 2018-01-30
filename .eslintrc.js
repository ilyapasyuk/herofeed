module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'airbnb',
    ],
    rules: {
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        'arrow-parens': ['error', 'always'],
        'func-names': ['off'],
        indent: ['error', 4, {
            SwitchCase: 1,
        }],
        'object-curly-spacing': ['error', 'never'],
        'space-before-function-paren': ['error', 'never'],
        'wrap-iife': ['error', 'inside'],
        'comma-dangle': ['error', 'always-multiline'],
        'no-use-before-define': ['error', {functions: false, classes: true}],
        'function-paren-newline': ['error', {minItems: 4}],
        'no-multiple-empty-lines': ['error', {max: 1}],
        'no-prototype-builtins': ['off'],
        'no-plusplus': ['off'],
    },
};
