var assert = require('assert')

module.exports = onIntersect

function onIntersect (el, opts, onEnter, onExit) {
  assert.ok(typeof window !== 'undefined', 'on-intersect: window did not exist. Are you calling this in the browser?')
  assert.equal(typeof el, 'object', 'on-intersect: el should be a valid DOM node')

  if (typeof opts === 'function') {
    onExit = onEnter
    onEnter = opts
    opts = {}
  }

  assert.ok(onEnter || onExit, 'on-intersect: must have at least one listener')

  onEnter = onEnter || noop
  onExit = onExit || noop

  assert.equal(typeof opts, 'object', 'on-intersect: opts should be type object')
  assert.equal(typeof onEnter, 'function', 'on-intersect: onEnter should be type function')
  assert.equal(typeof onExit, 'function', 'on-intersect: onExit should be type function')

  var wasCalled = false
  var observer = new window.IntersectionObserver(handler, opts)
  observer.observe(el)

  return function () {
    observer.disconnect()
  }

  function handler (entries, obs) {
    var entry = entries[0]

    // This covers subtle edge cases where the intersection value is 0.
    // See: https://github.com/yoshuawuyts/on-intersect/issues/2
    var isNotIntersecting = typeof entry.isIntersecting === 'boolean'
      ? !entry.isIntersecting
      : entry.intersectionRatio === 0

    if (isNotIntersecting) {
      // Make sure it's not called immediately when loaded.
      if (wasCalled) onExit(entry)
    } else {
      onEnter(entry)
    }

    wasCalled = true
  }
}

function noop () {}
