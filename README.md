# on-intersect [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Call back when an element intersects with another.

## Usage
```js
var intersectExists = require('on-intersect/exists')
var onViewport = require('on-intersect')
var html = require('bel')

var el = html`
  <h1 style="color: white">
    BECOME THE GOBLIN!
  </h1>
`

var main = html`
  <main>
    <div style="height: 110vh"></div>
    ${el}
  </main>
`

document.body.appendChild(main)

// observers should only be added _after_ the element is rendered on the DOM,
// else it displeases the browser emperors and they _will_ warn you
if (intersectExists()) {
  onIntersect(el, onEnter, onExit)
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
}
```

## API
### el = onViewport(elementOrObject, [onEnter|null], [onExit])
Call a callback when an element intersects with another. Defaults to
`document.body`. The first argument can either be an HTML Node or an object. If
it's an object it must contain a `target` which is an HTML node. Options can be:
- __target:__ The element that is being observed
- __root:__ The element that is used as the viewport for checking visiblity of
  the target. Defaults to the browser viewport.
- __rootMargin:__ Margin around the root. Can have values similar to the css
  margin property: `"10px 20px 30px 40px"` (top, right, bottom, left). If the
  root element is specified % values can be used.
- __threshold:__ Number or array of numbers to indicate at what % of visiblity
  of the target the observer should trigger. eg: trigger for every 25 percent
  that comes into view: [0, 0.25, 0.5, 0.75, 1]. Will call `onEnter` every time
  the threshold is passed. `threshold` defaults to 1.

### bool = intersectExists()
Check if `window.InterSectionObserver` exists

## Installation
```sh
$ npm install on-intersect
```

## Further Reading
- [MDN/Intersection_Observer_API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/on-intersect.svg?style=flat-square
[3]: https://npmjs.org/package/on-intersect
[4]: https://img.shields.io/travis/yoshuawuyts/on-intersect/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/on-intersect
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/on-intersect/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/on-intersect
[8]: http://img.shields.io/npm/dm/on-intersect.svg?style=flat-square
[9]: https://npmjs.org/package/on-intersect
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
