# on-intersect [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Call back when an element intersects with another.

## Usage
```js
var onIntersect = require('on-intersect')
var html = require('bel')

var el = html`<h1>Yay, we're a heading!</h1>`

onIntersect(el, function () {
  console.log('Woot, component is visible!')
})

document.body.appendChild(html`
  <main>
    <div style="height: 110vh"></div>
    ${el}
    <div style="height: 110vh"></div>
  </main>
`)
```

## API
### stopObserving = onViewport(element, [opts], [onEnter], [onExit])
Call `onEnter` when an element scrolls into view, and `onExit` when an element
scrolls out of view.  `opts` can be any value passed into the
[InterSectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)
constructor.

### stopObserving()
Stop the observer.

## Installation
```sh
$ npm install on-intersect
```

## Further Reading
- [MDN/Intersection_Observer_API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

## Authors
- [Finn Pauls](https://github.com/finnp)
- [Yoshua Wuyts](https://github.com/yoshuawuyts)

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
