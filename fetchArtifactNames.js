const fetch = require('node-fetch')
const ids = require('./artefacts.json')
const jsdom = require('jsdom')
const fs = require('fs')

const { JSDOM } = jsdom

const re = /\(T\d{1}\)/gi

const getNames = async () => {
  const baseUrl = 'https://www.albiononline2d.com/en/item/id/'
  const namePromises = ids.map(async el => {
    const res = await fetch(baseUrl + el).then(res => res.text())
    const doc = new JSDOM(res)
    let objectName = doc.window.document
      .querySelector('.col-lg-10.d-flex.flex-column.justify-content-center')
      .textContent.replace(re, '')
      .trim()
    return {
      objectID: el,
      objectName: objectName
    }
  })

  const names = await Promise.all(namePromises)
  const json = JSON.stringify(names, '', 2)
  fs.writeFileSync('artifactNames.json', json)
}

getNames()
