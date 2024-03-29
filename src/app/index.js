import {run} from '@cycle/xstream-run'
import {div, label, input, hr, h1, makeDOMDriver} from '@cycle/dom'

function main (sources) {
  const sinks = {
    DOM: sources.DOM.select('.field').events('input')
      .map(ev => ev.target.value)
      .startWith('')
      .map(name =>
           div([
             label('Name:'),
             input('.field', {attrs: {type: 'text'}}),
             hr(),
             h1(`Hello ${name}`)
           ])
      )
  }

  return sinks
}

alert('about to start')
run(main, { DOM: makeDOMDriver('#root') })

if (module.hot) {
  // hook up module hot reloading
}
