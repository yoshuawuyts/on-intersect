module.exports = exists

function exists () {
  return (typeof window === 'object') &&
    (typeof window.IntersectionObserver !== 'undefined')
}
