import { distinctLoot, multiplyLoot } from './lootMultiplication'
import shuffle from 'lodash/shuffle'

const roll = (players, loot) => {
  const sortedLoot = multiplyLoot(loot).sort(
    (a, b) => b.averagePrice - a.averagePrice
  )
  const playerShare = Math.floor(
    sortedLoot
      .map(item => item.averagePrice)
      .reduce((acc, curr) => acc + curr, 0) / players.length
  )
  const result = players.reduce(
    (acc, curr) => ({ ...acc, [curr.name]: { items: [], totalValue: 0 } }),
    {}
  )

  for (const item of sortedLoot) {
    let rollingPlayers = Object.entries(result)
      .filter(([, attributes]) => attributes.totalValue < playerShare)
      .map(([name, attributes]) => ({
        name,
        totalValue: attributes.totalValue
      }))

    // TODO: handle issue with two players with the same name
    rollingPlayers = shuffle(rollingPlayers)
    let difference = rollingPlayers.map(player => {
      const difference = player.totalValue + item.averagePrice - playerShare
      return { ...player, difference }
    })
    difference = difference.sort((a, b) => a.difference - b.difference)

    const winner = difference[0].name
    result[winner].items.push(item)
    result[winner].totalValue += item.averagePrice
  }

  for (let player in result) {
    result[player].items = distinctLoot(result[player].items)
  }

  return result
}

export default roll
