# Get env variables from config file

[![License](https://img.shields.io/npm/l/leibniz.svg?maxAge=2592000)](https://img.shields.io/npm/l/leibniz.svg?maxAge=2592000)

```javascript
const conenv = require('conenv')

conenv({
  PORT: 3306,
  PASS: 'ENV:DB_PASS',
  NAME: 'ENV:DB_NAME'
}))

// PASS And NAME will be replaced with the value of process.env.DB_PASS and process.env.DB_NAME

```
