const {
  getOptions,
  parseQuery,
  stringifyRequest,
} = require("loader-utils");
const less = require("less");
function loader (source) {
  console.log(arguments, 'less-loader')
  const options = getOptions(this);
  console.log('options', options)
  stringifyRequest(this, "test/lib/index.js")
  const callback = this.async();
  callback(null, '来自less-loader')
}
module.exports = loader;