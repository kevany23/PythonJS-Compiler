/**
 * Check if something is defined
 * @param  val the value to be checked
 * @return true if value is defined, false otherwise
 */
function defined(val) {
  return ! (typeof val === "undefined");
}

module.exports = {
  defined: defined
}
