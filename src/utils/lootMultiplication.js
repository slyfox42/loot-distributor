import groupBy from 'lodash/groupBy'

const multiplyItem = item => {
  const result = []
  const { quantity, objectID, objectName, averagePrice, imgID } = item
  for (let index = 0; index < quantity; index++) {
    result.push({
      objectID,
      objectName,
      imgID,
      averagePrice,
      quantity: 1
    })
  }
  return result
}

export const multiplyLoot = loot =>
  loot
    .map(item => multiplyItem(item))
    .reduce((acc, curr) => [...acc, ...curr], [])

export const distinctLoot = loot => {
  const grouped = groupBy(loot, 'objectName')
  return Object.values(grouped)
    .map(items => ({
      ...items[0],
      quantity: items.reduce((acc, curr) => acc + curr.quantity, 0)
    }))
    .filter(el => el.quantity > 0)
}
