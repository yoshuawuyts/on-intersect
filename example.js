var intersectExists = require('./exists')
var onIntersect = require('./')
var html = require('bel')

var el = html`
  <h1 style="color: white">
    BEHOLD THE GOBLIN!
  </h1>
`

var main = html`
  <main>
    <div style="height: 110vh"></div>
    ${el}
    <div style="height: 110vh"></div>
  </main>
`

document.body.appendChild(main)

// observers should only be added _after_ the element is rendered on the DOM,
// else it displeases the browser emperors and they _will_ warn you
if (intersectExists()) {
  var stop = onIntersect(el, onEnter, onExit)
}

function onEnter (entry) {
  console.log(entry.time)
  console.log(entry.rootBounds)
  console.log(entry.intersectionRect)
  console.log(entry.intersectionRatio)
  console.log(entry.target)

  document.body.setAttribute('style', 'background-color: green')
}

function onExit (entry) {
  document.body.setAttribute('style', 'background-color: white')
  // stop()
}
