module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react", "flowtype"
  ],
  "rules": {
    "semi": 0
  },
  "extends": [
    "plugin:react/recommended", "plugin:flowtype/recommended"
  ]
}
