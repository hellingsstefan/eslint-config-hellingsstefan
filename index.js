'use strict';

module.exports = {
    'extends': [
        'eslint:recommended',
    ],
    'env': {
        'es6': true,
        'browser': true,
        'node': true,
    },
    'rules': {
        'array-bracket-spacing': [ 'error', 'always' ],
        'arrow-spacing': 'error',
        'brace-style': [ 'error', '1tbs', { 'allowSingleLine': true } ],
        'comma-dangle': [ 'error', 'always-multiline' ],
        'computed-property-spacing': [ 'error', 'never' ],
        'consistent-this': [ 'error', 'self' ],
        'curly': [ 'error', 'multi-or-nest', 'consistent' ],
        'eol-last': [ 'error', 'always' ],
        'indent': [ 'error', 4 ],
        'key-spacing': [ 'error' ],
        'keyword-spacing': [ 'error', { 'before': true } ],
        'lines-between-class-members': [
            'error',
            'always',
            {
                'exceptAfterSingleLine': true,
            },
        ],
        'linebreak-style': [ 'error', 'unix' ],
        'max-nested-callbacks': [ 'error', 4 ],
        'no-multiple-empty-lines': [ 'error', {
            'max': 1,
            'maxEOF': 0,
        } ],
        'no-console': [
            'warn',
            {
                'allow': [ 'warn', 'error' ],
            },
        ],
        'no-const-assign': 'error',
        'no-debugger': 'error',
        'no-dupe-class-members': 'error',
        'no-lonely-if': 'error',
        'no-multi-spaces': [ 'error' ],
        'no-negated-condition': 'error',
        'no-this-before-super': 'error',
        'no-trailing-spaces': 'error',
        'no-use-before-define': [ 'error', {
            'functions': false,
            'classes': true,
            'variables': true,
            'allowNamedExports': false
        } ],
        'object-curly-spacing': [ 'error', 'always' ],
        'padding-line-between-statements': [
            'error',
            {
                'blankLine': 'always',
                'prev': [ 'const', 'let', 'var' ],
                'next': '*',
            },
            {
                'blankLine': 'any',
                'prev': [ 'const', 'let', 'var' ],
                'next': [ 'const', 'let', 'var' ],
            },
        ],
        'quotes': [ 'error', 'single' ],
        'semi': [ 'error', 'always' ],
        'space-before-function-paren': [ 'error', {
            'anonymous': 'never',
            'named': 'never',
            'asyncArrow': 'always',
        } ],
        'space-in-parens': [ 'error', 'never' ],
        'space-infix-ops': [ 'error', { 'int32Hint': false } ],
    }
};
