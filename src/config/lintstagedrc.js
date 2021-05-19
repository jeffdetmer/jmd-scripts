const {resolveJmdScripts, resolveBin} = require('../utils')

const jmdScripts = resolveJmdScripts()
const doctoc = resolveBin('doctoc')

module.exports = {
  'README.md': [`${doctoc} --maxlevel 3 --notitle`],
  '*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|gql|graphql|mdx|vue)': [
    `${jmdScripts} format`,
    `${jmdScripts} lint`,
    `${jmdScripts} test --findRelatedTests`,
  ],
}
