module.exports = function acronym(string) {
  return string
    .split(' ')
    .map((word) => word.charAt(0))
    .join('')
}
