module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "prefer-arrow-callback": 0,
    "func-names": 0,
    "no-alert": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": [2, { caseSensitive: false }],
    "no-underscore-dangle": 0,
    "no-unused-expressions": 0,
    "no-use-before-define": 0,
    "react/sort-comp": 0,
    "react/no-multi-comp": 0,
    "react/require-default-props": 0,
    "react/require-extension": 0
  }
};
