var window = require('global/window')
var assert = require('assert')
var isDom = require('is-dom')

module.exports = onViewport

// Call back when an element intersects with another
// (html|obj, fn?, fn?) -> fn
function onViewport (elOrOpts, onEnter, onExit) {
  var opts = null
  var el = null

  if (isDom(elOrOpts)) {
    el = elOrOpts
    opts = {}
  } else {
    assert.equal(typeof elOrOpts, 'object', 'on-intersect: elOrOpts should be type object')
    el = elOrOpts.target
    opts = elOrOpts
  }

  onEnter = onEnter || noop
  onExit = onExit || noop

  assert.ok((typeof window === 'object') &&
    (typeof window.IntersectionObserver !== 'undefined'), 'on-intersect: window.IntersectionObserver should exist. Use on-intersect/exists to perform a check')
  assert.ok(isDom(el), 'on-intersect: el should be an HTML node')
  assert.equal(typeof onEnter, 'function', 'on-intersect: onEnter should be type function')
  assert.equal(typeof onExit, 'function', 'on-intersect: onExit should be type function')

  var observer = new window.IntersectionObserver(handler, opts)
  observer.observe(el)

  return function () {
    observer.disconnect()
  }

  function handler (entries, obs) {
    var entry = entries[0]
    if (entry.intersectionRatio === 0) {
      onExit(entry)
    } else {
      onEnter(entry)
    }
  }
}

function noop () {}
