module.exports = {
  "env": {
    "browser": false,
    "node": true,
    "commonjs": true,
    "es6": true,
    "mocha": true
  },
  "extends": [
    "airbnb-base",
    "plugin:node/recommended"
  ],
  "plugins": [
    "mocha",
    "node"
  ],
  "rules": {
    "indent": 2,
    "linebreak-style": 0,
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-console": "off",
    "eqeqeq": "warn",
    "curly": "error",
    "comma-dangle": ["error", "never"],
    "no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "describe|it|should|expect"
      }
    ]
  }
};
