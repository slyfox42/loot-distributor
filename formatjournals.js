const fs = require('fs')
const journals = require('./journals.json')

const tiers = {
  t2: 'Novice',
  t3: 'Journeyman',
  t4: 'Adept',
  t5: 'Expert',
  t6: 'Master',
  t7: 'Grandmaster',
  t8: 'Elder'
}

const categories = {
  wood: "Lumberjack's",
  stone: "Stonecutter's",
  ore: "Prospector's",
  fiber: "Cropper's",
  hide: "Gamekeeper's",
  warrior: "Blacksmith's",
  hunter: "Fletcher's",
  mage: "Imbuer's",
  toolmaker: "Tinker's",
  mercenary: "Mercenary's",
  fishing: "Fisherman's",
  general: 'Generalist'
}

const newJournals = journals.map(el => {
  const tier = el.id.substring(0, 2).toLowerCase()

  if (el.id.toLowerCase().includes('trophy')) {
    const category = el.id
      .split('TROPHY_')
      .pop()
      .toLowerCase()

    return {
      ...el,
      name: `${tiers[tier]} ${categories[category]} Trophy Journal`
    }
  }
  const category = el.id
    .split('JOURNAL_')
    .pop()
    .toLowerCase()

  return {
    ...el,
    name: `${tiers[tier]} ${categories[category]} Journal`
  }
})

fs.writeFileSync('./src/journals2.json', JSON.stringify(newJournals, '', 2))
