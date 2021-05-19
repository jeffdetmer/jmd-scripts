const {resolveJmdScripts} = require('../utils')

const jmdScripts = resolveJmdScripts()

module.exports = {
  hooks: {
    'pre-commit': `"${jmdScripts}" pre-commit`,
  },
}
