# Get env variables from config file

[![Npm](https://img.shields.io/npm/v/conenv.svg)](https://img.shields.io/npm/v/conenv.svg)
[![License](https://img.shields.io/npm/l/leibniz.svg?maxAge=2592000)](https://img.shields.io/npm/l/leibniz.svg?maxAge=2592000)

> Attention! Please not use this module untile it is stable

## Install

#### yarn
```javascript
yarn add conenv -S
```


#### npm
```javascript
npm install conenv -S
```

## Example
```javascript
const conenv = require('conenv')

conenv({
  PORT: 3306,
  PASS: 'ENV:DB_PASS',
  NAME: 'ENV:DB_NAME'
}))

// PASS And NAME will be replaced with the value of process.env.DB_PASS and process.env.DB_NAME

```
