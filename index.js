const cache = {}

/**
 * ENV:DB_PASS => process.env.DB_PASS
 * ENV:CACHE_DB => process.env.CACHE_DB
 */
function conenv (config) {
  const stringifyConfig = JSON.stringify(config)
  if (cache[stringifyConfig]) {
    return cache[stringifyConfig]
  }
  const target = JSON.parse(stringifyConfig)
  for (const property in target) {
    if (typeof target[property] === 'string') {
      const items = target[property].match(/^ENV:([A-Z_]+)$/)
      if (items !== null) {
        target[property] = process.env[items[1]]
      }
    } else {
      target[property] = conenv(target[property])
    }
  }
  cache[stringifyConfig] = target
  return target
}
