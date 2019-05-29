import { ITEM_QUALITIES } from '../constants'
import { distinctLoot } from './lootMultiplication'
import fetchAveragePrice from './fetchAveragePrice'
import uuid from 'uuid'

const allItems = require('../items.json')

const parseCsv = csv => {
  const lines = csv.split('\n')
  const headers = lines.shift().split(',')
  const result = lines
    .filter(el => !!el)
    .map(line => {
      const currentLine = line.split(',')
      const obj = {}
      for (let i = 0; i < headers.length; i++) {
        obj[headers[i].toLowerCase()] = currentLine[i]
      }
      return obj
    })

  return result
}

const parseChestLogs = logs => {
  const formattedLogs = logs.replace(/[\t]/gm, ',').replace(/"/gm, '')
  const objects = parseCsv(formattedLogs)
  const items = objects.map(object => {
    const objectName =
      object.enchantment === '0'
        ? object.item
        : `${object.item} .${object.enchantment}`
    const item = allItems.find(el => el.objectName === objectName)
    const uniqueID = uuid()
    return {
      ...item,
      uniqueID,
      objectName: `${item.objectName} ${ITEM_QUALITIES[object.quality]}`,
      quantity: parseInt(object.amount)
    }
  })
  const distinctItems = distinctLoot(items)

  return Promise.all(
    distinctItems.map(async item => {
      const averagePrice = await fetchAveragePrice(item.objectID)
      return { ...item, averagePrice }
    })
  )
}

export default parseChestLogs
