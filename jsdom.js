const path = require('path')
const yargs = require('yargs')
const jsdom = require("jsdom")
const { JSDOM } = jsdom
const file = path.resolve('./', yargs.argv.file)
const query = yargs.argv.query
// data
const textContents = []

JSDOM.fromFile(file)
  .then(dom => {
    const res = dom.window.document.querySelectorAll(query)
    // update textContents Array
    res.forEach( elm => textContents.push(elm.textContent))
  })
  .then(() => {
    const string = textContents.join(' ')
    console.log(string) // !DEBUG
})
