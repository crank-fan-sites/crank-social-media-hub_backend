// filename: generateCode.js
const crypto = require('crypto')
console.log(`${crypto.randomBytes(16).toString('base64')},${crypto.randomBytes(16).toString('base64')}`)
