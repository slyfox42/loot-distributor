import { ITEM_QUALITIES } from '../constants'
import { distinctLoot } from './lootMultiplication'
import fetchAveragePrice from './fetchAveragePrice'
import moment from 'moment'
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
  const formattedLogs = logs.replace(/[ ]{2,}|[\t]/gm, ',').replace(/"/gm, '')
  const objects = parseCsv(formattedLogs)
  const items = objects
    .map(object => {
      const objectName =
        object.enchantment === '0'
          ? object.item
          : `${object.item} .${object.enchantment}`
      const item = allItems.find(el => el.objectName === objectName)
      if (!item) {
        return null
      }
      const uniqueID = uuid()
      const date = moment(object.date, 'MM-DD-YYYY HH:mm:ss')

      return {
        ...item,
        date,
        uniqueID,
        objectName: `${item.objectName} ${ITEM_QUALITIES[object.quality]}`,
        quantity: parseInt(object.amount)
      }
    })
    .filter(el => !!el)
    .sort((a, b) => {
      return a.date.isAfter(b.date) ? -1 : 1
    })

  const startDate = items[0].date
  const endDate = moment(startDate).subtract(10, 'minutes')
  const filteredItems = items.filter(el => el.date.isAfter(endDate))

  const distinctItems = distinctLoot(filteredItems)

  return Promise.all(
    distinctItems.map(async item => {
      const averagePrice = await fetchAveragePrice(item.objectID)
      return { ...item, averagePrice }
    })
  )
}

export default parseChestLogs
