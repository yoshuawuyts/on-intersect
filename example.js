var onIntersect = require('./')
var html = require('bel')

if (typeof window !== 'undefined') {
  var el = html`<h1>Yay, we're a heading!</h1>`
  onIntersect(el, function () {
    console.log('Woot, component is visible!')
  }, function () {
    console.log('Woot, component is no longer visible!')
  })

  document.body.appendChild(html`
    <main>
      <div style="height: 110vh"></div>
      ${el}
      <div style="height: 110vh"></div>
    </main>
  `)
}
