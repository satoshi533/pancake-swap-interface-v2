
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./sdk-v2.cjs.production.min.js')
} else {
  module.exports = require('./sdk-v2.cjs.development.js')
}
