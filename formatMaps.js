const { tiers } = require('./constants')

const categories = [
  { name: 'Solo', id: 'SOLO' },
  { name: 'Group' },
  { name: 'Large Group', id: 'ELITE' }
]

const formatMaps = () =>
  categories
    .map((category, idx) => {
      let tierList = tiers
      if (idx === 2) {
        tierList = tiers.slice(2)
      }
      return tierList.map(tier => {
        const id =
          category.name === 'Group'
            ? `${tier.id}_RANDOM_DUNGEON_TOKEN_`
            : `${tier.id}_RANDOM_DUNGEON_${category.id}_TOKEN_`
        const name = `${tier.name} Dungeon Map (${category.name})`
        const enchantments = ['1', '2', '3', '4']
        return enchantments.map(ench => ({
          id: id + ench,
          name
        }))
      })
    })
    .reduce((curr, next) => [...curr, ...next])
    .reduce((curr, next) => [...curr, ...next])

module.exports = formatMaps
