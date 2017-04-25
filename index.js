const cache = new Map()

/**
 * ENV:DB_PASS => process.env.DB_PASS
 * ENV:CACHE_DB => process.env.CACHE_DB
 */
function conenv (config) {
  if (cache.has(config)) {
    return cache.get(config)
  }
  const target = JSON.parse(JSON.stringify(config))
  for (const property in target) {
    const items = target[property].match(/^ENV:([A-Z_]+)$/)
    if (items !== null) {
      target[property] = process.env[items[1]]
    }
  }
  cache.set(config, target)
  return target
}
