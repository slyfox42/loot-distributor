const fs = require('fs')
const baseItems = require('./raw_items.json')
const artifactNames = require('./artifactNames.json')
const formatAvalonians = require('./formatAvalonians')
const formatMaps = require('./formatMaps')

const avalonianItems = formatAvalonians()
const dungeonMaps = formatMaps()

let itemList = [...baseItems, ...avalonianItems, ...dungeonMaps]

itemList = itemList.map(el => {
  if (el.id.includes('@')) {
    const enchantment = el.id.split('@').pop()
    const new_name = `${el.name} .${enchantment}`
    return {
      objectID: el.id,
      objectName: new_name
    }
  }
  return {
    objectID: el.id,
    objectName: el.name
  }
})

const artefacts = itemList
  .filter(el => el.objectID.match(/artefact/gi))
  .map(el => {
    return {
      objectID: el.objectID,
      objectName: el.objectName
    }
  })
  .map(el => {
    const correctArtifact = artifactNames.find(
      artifact => artifact.objectID === el.objectID
    )
    return {
      ...el,
      objectName: correctArtifact.objectName,
      category: 'Artefacts'
    }
  })

const clothArmor = itemList
  .filter(el => el.objectID.match(/armor_cloth/gi))
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Cloth Armor'
  }))

const clothHelmet = itemList
  .filter(el => el.objectID.match(/head_cloth/gi))
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Cloth Helmet'
  }))

const clothShoes = itemList
  .filter(el => el.objectID.match(/shoes_cloth/gi))
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Cloth Shoes'
  }))

const leatherArmor = itemList
  .filter(el => el.objectID.match(/armor_leather/gi))
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Leather Armor'
  }))

const leatherHelmet = itemList
  .filter(el => el.objectID.match(/head_leather/gi))
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Leather Helmet'
  }))

const leatherShoes = itemList
  .filter(el => el.objectID.match(/shoes_leather/gi))
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Leather Shoes'
  }))

const plateArmor = itemList
  .filter(el => el.objectID.match(/armor_plate/gi))
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Plate Armor'
  }))

const plateHelmet = itemList
  .filter(el => el.objectID.match(/head_plate/gi))
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Plate Helmet'
  }))

const plateShoes = itemList
  .filter(el => el.objectID.match(/shoes_plate/gi))
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Plate Shoes'
  }))

const gatherer = itemList
  .filter(el => el.objectID.match(/gatherer/gi))
  .map(el => ({
    ...el,
    category: 'Gatherer'
  }))

const tools = itemList
  .filter(el => el.objectID.match(/tool/gi))
  .map(el => ({
    ...el,
    category: 'Tools'
  }))

const bows = itemList
  .filter(el => el.objectID.match(/2h_bow|longbow|warbow/gi))
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Bows'
  }))

const crossbows = itemList
  .filter(el => el.objectID.match(/crossbow/gi))
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Crossbows'
  }))

const axes = itemList
  .filter(el => el.objectID.match(/axe|halberd|main_axe|2H_SCYTHE_HELL/gi))
  .filter(el => !el.objectID.match(/artefact|tool/gi))
  .map(el => ({
    ...el,
    category: 'Axes'
  }))

const daggers = itemList
  .filter(el =>
    el.objectID.match(/dualsickle|irongauntlets|rapier|dagger|clawpair/gi)
  )
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Daggers'
  }))

const hammers = itemList
  .filter(el => el.objectID.match(/dualhammer|hammer|ram_keeper/gi))
  .filter(el => !el.objectID.match(/artefact|tool/gi))
  .map(el => ({
    ...el,
    category: 'Hammers'
  }))

const maces = itemList
  .filter(el => el.objectID.match(/mace|flail/gi))
  .filter(el => !el.objectID.match(/artefact|tool/gi))
  .map(el => ({
    ...el,
    category: 'Maces'
  }))

const quarterstaffs = itemList
  .filter(el =>
    el.objectID.match(
      /combatstaff|rockstaff|twinscythe|quarterstaff|ironcladedstaff|doublebladedstaff/gi
    )
  )
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Quarterstaffs'
  }))

const spears = itemList
  .filter(el => el.objectID.match(/harpoon|trident|spear|glaive/gi))
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Spears'
  }))

const swords = itemList
  .filter(el =>
    el.objectID.match(/cleaver|scimitar|sword|claymore|dualsword/gi)
  )
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Swords'
  }))

const arcaneStaffs = itemList
  .filter(el => el.objectID.match(/arcanestaff|enigmaticorb|enigmaticstaff/gi))
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Arcane Staffs'
  }))

const cursedStaffs = itemList
  .filter(el => el.objectID.match(/cursedstaff|skullorb|demonicstaff/gi))
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Cursed Staffs'
  }))

const fireStaffs = itemList
  .filter(el => el.objectID.match(/firestaff|infernostaff/gi))
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Fire Staffs'
  }))

const frostStaffs = itemList
  .filter(el =>
    el.objectID.match(/icecrystal|icegauntlets|froststaff|glacialstaff/gi)
  )
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Frost Staffs'
  }))

const holyStaffs = itemList
  .filter(el => el.objectID.match(/holystaff|divinestaff/gi))
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Holy Staffs'
  }))

const natureStaffs = itemList
  .filter(el => el.objectID.match(/naturestaff|wildstaff/gi))
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Nature Staffs'
  }))

const books = itemList
  .filter(el =>
    el.objectID.match(/off_orb_morgana|off_demonskull|off_totem|off_book/gi)
  )
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Books'
  }))

const shields = itemList
  .filter(el => el.objectID.match(/shield/gi))
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Shields'
  }))

const torches = itemList
  .filter(el =>
    el.objectID.match(/off_torch|off_horn_keeper|off_jestercane|off_lamp/gi)
  )
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Torches'
  }))

const potions = itemList
  .filter(el => el.objectID.match(/potion/gi))
  .filter(el => !el.objectID.match(/artefact/gi))
  .map(el => ({
    ...el,
    category: 'Potions'
  }))

const capes = itemList
  .filter(el => el.objectID.match(/cape/gi))
  .filter(el => !el.objectID.match(/artefact|banner|bp/gi))
  .map(el => ({
    ...el,
    category: 'Capes'
  }))

const bags = itemList
  .filter(el => el.objectID.match(/_bag/gi))
  .filter(el => !el.objectID.match(/BAG_FW|cabbage/gi))
  .map(el => ({
    ...el,
    category: 'Bags'
  }))

const mounts = itemList
  .filter(el => el.objectID.match(/mount_/gi))
  .filter(el => !el.objectID.match(/upgrade/gi))
  .map(el => ({
    ...el,
    objectName: el.objectName
      .split('.')
      .shift()
      .trim(),
    imgID: el.objectID.split('@').shift(),
    category: 'Mounts'
  }))

const tomes = itemList
  .filter(el => el.objectID.match(/T4_SKILLBOOK_STANDARD/gi))
  .map(el => ({
    ...el,
    category: 'Tomes'
  }))

const food = itemList
  .filter(el => el.objectID.match(/meal/gi))
  .map(el => ({
    ...el,
    category: 'Food'
  }))

const wood = itemList
  .filter(el => el.objectID.match(/wood/gi))
  .filter(el => !el.objectID.match(/gatherer/gi))
  .map(el => ({
    ...el,
    imgID: el.objectID.split('@').shift(),
    category: 'Wood'
  }))

const rock = itemList
  .filter(el => el.objectID.match(/rock/gi))
  .filter(el => !el.objectID.match(/staff|mace|gatherer/gi))
  .map(el => ({
    ...el,
    imgID: el.objectID.split('@').shift(),
    category: 'Rock'
  }))

const leather = itemList
  .filter(el => el.objectID.match(/leather/gi))
  .filter(el => !el.objectID.match(/head|armor|shoes|gatherer|cape/gi))
  .map(el => ({
    ...el,
    imgID: el.objectID.split('@').shift(),
    category: 'Leather'
  }))

const cloth = itemList
  .filter(el => el.objectID.match(/cloth/gi))
  .filter(el => !el.objectID.match(/head|armor|shoes|gatherer|cape/gi))
  .map(el => ({
    ...el,
    imgID: el.objectID.split('@').shift(),
    category: 'Cloth'
  }))

const ore = itemList
  .filter(el => el.objectID.match(/ore/gi))
  .filter(el => !el.objectID.match(/mount|gatherer|2h|fish/gi))
  .map(el => ({
    ...el,
    imgID: el.objectID.split('@').shift(),
    category: 'Ore'
  }))

const fiber = itemList
  .filter(el => el.objectID.match(/fiber/gi))
  .filter(el => !el.objectID.match(/gatherer/gi))
  .map(el => ({
    ...el,
    imgID: el.objectID.split('@').shift(),
    category: 'Fiber'
  }))

const hide = itemList
  .filter(el => el.objectID.match(/hide/gi))
  .filter(el => !el.objectID.match(/gatherer/gi))
  .map(el => ({
    ...el,
    imgID: el.objectID.split('@').shift(),
    category: 'Hide'
  }))

const fish = itemList
  .filter(el => el.objectID.match(/fish/gi))
  .filter(el => !el.objectID.match(/chops|gatherer|sauce|bait|meal|rod/gi))
  .map(el => ({
    ...el,
    imgID: el.objectID.split('@').shift(),
    category: 'Fish'
  }))

const stoneblocks = itemList
  .filter(el => el.objectID.match(/stoneblock/gi))
  .map(el => ({
    ...el,
    category: 'Stone Blocks'
  }))

const planks = itemList
  .filter(el => el.objectID.match(/planks/gi))
  .map(el => ({
    ...el,
    imgID: el.objectID.split('@').shift(),
    category: 'Wood Planks'
  }))

const metalbars = itemList
  .filter(el => el.objectID.match(/metalbar/gi))
  .map(el => ({
    ...el,
    imgID: el.objectID.split('@').shift(),
    category: 'Metal Bars'
  }))

const treasures = itemList
  .filter(el => el.objectID.match(/treasure/gi))
  .map(el => ({
    ...el,
    imgID: el.objectID.split('@').shift(),
    category: 'Treasures'
  }))

const runes = itemList
  .filter(el => el.objectID.match(/rune/gi))
  .map(el => ({
    ...el,
    category: 'Runes'
  }))

const souls = itemList
  .filter(el => el.objectID.match(/soul/gi))
  .map(el => ({
    ...el,
    category: 'Souls'
  }))

const relics = itemList
  .filter(el => el.objectID.match(/relic/gi))
  .map(el => ({
    ...el,
    category: 'Relics'
  }))

const journals = itemList
  .filter(el => el.objectID.match(/journal/gi))
  .map(el => ({
    ...el,
    category: 'Journals'
  }))

const crests = itemList
  .filter(el => el.objectName.match(/crest/gi))
  .map(el => ({
    ...el,
    category: 'Cape Crests'
  }))

const misc = itemList
  .filter(el => el.objectID.match(/questitem|unique_unlock|shard/gi))
  .map(el => ({
    ...el,
    category: 'Misc'
  }))

const maps = itemList
  .filter(el => el.objectID.match(/random_dungeon/gi))
  .map(el => ({
    ...el,
    category: 'Maps'
  }))

const new_json = JSON.stringify(
  [
    ...arcaneStaffs,
    ...artefacts,
    ...axes,
    ...bags,
    ...books,
    ...bows,
    ...capes,
    ...clothArmor,
    ...clothHelmet,
    ...clothShoes,
    ...crossbows,
    ...cursedStaffs,
    ...daggers,
    ...fireStaffs,
    ...frostStaffs,
    ...gatherer,
    ...hammers,
    ...holyStaffs,
    ...leatherArmor,
    ...leatherHelmet,
    ...leatherShoes,
    ...maces,
    ...mounts,
    ...natureStaffs,
    ...plateArmor,
    ...plateHelmet,
    ...plateShoes,
    ...potions,
    ...quarterstaffs,
    ...shields,
    ...spears,
    ...swords,
    ...tomes,
    ...tools,
    ...torches,
    ...food,
    ...wood,
    ...rock,
    ...leather,
    ...ore,
    ...fish,
    ...stoneblocks,
    ...hide,
    ...fiber,
    ...cloth,
    ...planks,
    ...metalbars,
    ...treasures,
    ...runes,
    ...souls,
    ...relics,
    ...journals,
    ...crests,
    ...misc,
    ...maps
  ],
  '',
  2
)
fs.writeFileSync('./src/items.json', new_json)
