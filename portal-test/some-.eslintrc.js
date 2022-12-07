module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      tsconfigRootDir : __dirname,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
      'plugin:@typescript-eslint/recommended',
    ],
    root: true,
    ignorePatterns: ['.eslintrc.js'],
    "settings": {
      "import/resolver": {
        "node": {
          "paths": ["./src"]
        }
      }
    },
    "env": {
      "es6": false,
      "browser": true,
      "jest": true
    },
  
  
    "rules": {
      // PANCAKE CONFIG
      "@typescript-eslint/no-unused-vars": "warn",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["warn"],
      // override, default: off
      "no-shadow": ["warn"],
      "@typescript-eslint/no-shadow": ["error"],
      // React
      "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
      "react/prop-types": 0,
      "react/jsx-props-no-spreading": 0,
      "react/no-multi-comp": 0,
      // END OF PANCAKE CONFIG
      "no-debugger":"off",
      "no-console": ["warn", { "allow": ["info", "warn", "error"] }],
      "no-plusplus": "off",
      "prefer-destructuring": ["warn", { "object": true, "array": false }],
      "no-underscore-dangle": "off",
      // Start temporary rules
      // These rules are here just to keep the lint error to "off" during the migration to the new rule set
      // They need to be removed and fixed as soon as possible
      "@typescript-eslint/ban-ts-comment": [1, { "ts-ignore": false, "ts-nocheck": false }],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "radix": "off",
      "import/no-extraneous-dependencies": "off",
      "react/require-default-props": "off",
      "react/no-unused-prop-types": "off",
      "react/button-has-type": "off",
      "@typescript-eslint/no-empty-function": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-noninteractive-element-interactions": "off",
      "react-hooks/exhaustive-deps": "off",
      "import/no-cycle": "off",
      "import/order": "warn",
      "no-void": "off",
      "consistent-return": "off",
      "jsx-a11y/label-has-associated-control": "off",
      "jsx-a11y/label-has-for":"off",
  
      "import/extensions": "off",
      "import/no-unresolved": "off",
      // End temporary rules
      // overrides
    }
  }