const {
  getOptions,
  parseQuery,
  stringifyRequest,
} = require("loader-utils");
const css = require("css-loader");
function loader (source) {
  console.log(arguments, 'css-loader')
  const options = getOptions(this);
  console.log('来自less的options', options)
  const callback = this.async();
  callback(null, '来自css-loader')
}
module.exports = loader;