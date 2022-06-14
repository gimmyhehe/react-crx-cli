const path = require('path')
const fs = require('fs-extra')

module.exports = function (name, options) {
  const targetDir = path.join(process.cwd(), name)

  fs.mkdirSync(targetDir)
}