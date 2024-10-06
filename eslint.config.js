import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
    {
        languageOptions: {
            globals: globals.node,
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: "module"
            },
        },
        ...pluginJs.configs.recommended, rules: {
            "no-console": "off",
            "no-unused-vars": "warn"
        }
    }
]