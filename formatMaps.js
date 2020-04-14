const { tiers } = require('./constants')

const categories = ['Solo', 'Group']

const formatMaps = () =>
  categories
    .map(category =>
      tiers.map(tier => {
        const id =
          category === 'Solo'
            ? `${tier.id}_RANDOM_DUNGEON_${category.toUpperCase()}_TOKEN_`
            : `${tier.id}_RANDOM_DUNGEON_TOKEN_`
        const name = `${tier.name} Dungeon Map (${category})`
        const enchantments = ['1', '2', '3', '4']
        return enchantments.map(ench => ({
          id: id + ench,
          name
        }))
      })
    )
    .reduce((curr, next) => [...curr, ...next])
    .reduce((curr, next) => [...curr, ...next])

module.exports = formatMaps
