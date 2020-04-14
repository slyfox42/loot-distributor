const { tiers } = require('./constants')

const tools = [
  {
    name: 'Sickle',
    id: 'SICKLE'
  },
  {
    name: 'Pickaxe',
    id: 'PICK'
  },
  {
    name: 'Axe',
    id: 'AXE'
  },
  {
    name: 'Skinning Knife',
    id: 'KNIFE'
  },
  {
    name: 'Stone Hammer',
    id: 'HAMMER'
  }
]

const armor = [
  {
    name: 'Armor of Valor',
    id: 'ARMOR_PLATE_AVALON'
  },
  {
    name: 'Boots of Valor',
    id: 'SHOES_PLATE_AVALON'
  },
  {
    name: 'Helmet of Valor',
    id: 'HEAD_PLATE_AVALON'
  },
  {
    name: 'Hood of Tenacity',
    id: 'HEAD_LEATHER_AVALON'
  },
  {
    name: 'Jacket of Tenacity',
    id: 'ARMOR_LEATHER_AVALON'
  },
  {
    name: 'Shoes of Tenacity',
    id: 'SHOES_LEATHER_AVALON'
  },
  {
    name: 'Cowl of Purity',
    id: 'HEAD_CLOTH_AVALON'
  },
  {
    name: 'Robe of Purity',
    id: 'ARMOR_CLOTH_AVALON'
  },
  {
    name: 'Sandals of Purity',
    id: 'SHOES_CLOTH_AVALON'
  }
]

const food = ['Stew', 'Sandwich', 'Omelette']
const foodTiers1 = [
  {
    name: `Goat`,
    id: 'T4'
  },
  {
    name: `Mutton`,
    id: 'T6'
  },
  {
    name: `Beef`,
    id: 'T8'
  }
]
const foodTiers2 = [
  {
    name: `Chicken`,
    id: 'T3'
  },
  {
    name: `Goose`,
    id: 'T5'
  },
  {
    name: `Pork`,
    id: 'T7'
  }
]

const formatAvalonianItems = () => {
  const mappedTools = tools
    .map(item =>
      tiers.map(tier => ({
        id: `${tier.id}_2H_TOOL_${item.id}_AVALON`,
        name: `${tier.name} Avalonian ${item.name}`
      }))
    )
    .reduce((prev, next) => [...prev, ...next])

  const mappedArmors = armor
    .map(item =>
      tiers.map(tier => [
        {
          id: `${tier.id}_${item.id}`,
          name: `${tier.name} ${item.name}`
        },
        {
          id: `${tier.id}_${item.id}@1`,
          name: `${tier.name} ${item.name}`
        },
        {
          id: `${tier.id}_${item.id}@2`,
          name: `${tier.name} ${item.name}`
        },
        {
          id: `${tier.id}_${item.id}@3`,
          name: `${tier.name} ${item.name}`
        }
      ])
    )
    .reduce((prev, next) => [...prev, ...next])
    .reduce((prev, next) => [...prev, ...next])

  const mappedFood = food
    .map(item => {
      let tiers = foodTiers1
      if (item === 'Omelette') {
        tiers = foodTiers2
      }
      return tiers.map(tier => {
        return [
          {
            id: `${tier.id}_MEAL_${item.toUpperCase()}_AVALON`,
            name: `Avalonian ${tier.name} ${item}`
          },
          {
            id: `${tier.id}_MEAL_${item.toUpperCase()}_AVALON@1`,
            name: `Avalonian ${tier.name} ${item}`
          },
          {
            id: `${tier.id}_MEAL_${item.toUpperCase()}_AVALON@2`,
            name: `Avalonian ${tier.name} ${item}`
          },
          {
            id: `${tier.id}_MEAL_${item.toUpperCase()}_AVALON@3`,
            name: `Avalonian ${tier.name} ${item}`
          }
        ]
      })
    })
    .reduce((prev, next) => [...prev, ...next])
    .reduce((prev, next) => [...prev, ...next])

  return [
    ...mappedArmors,
    ...mappedTools,
    ...mappedFood,
    {
      id: 'T7_MOUNT_SWAMPDRAGON_AVALON_BASILISK',
      name: 'Avalonian Basilisk'
    },
    {
      id: 'QUESTITEM_TOKEN_AVALON',
      name: 'Avalonian Energy'
    }
  ]
}

module.exports = formatAvalonianItems
