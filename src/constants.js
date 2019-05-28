export const IMAGE_BASE_URL =
  'https://albiononline2d.ams3.cdn.digitaloceanspaces.com/thumbnails/orig/'

export const LOCALES = {
  english: 'en-US',
  italian: 'it-IT'
}

export const APP_DESCRIPTIONS = {
  italian: {
    itemSelection: 'Selezione oggetti:',
    itemSelectionFirstParagraph: `Per selezionare un oggetto, digitare il nome dell'oggetto nella barra di ricerca. Gli oggetti possono essere filtrati per categoria e tier.
    Cliccando un oggetto e' possibile selezionare la qualita' e aggiungerlo alla tabella di destra. Se un oggetto non appare nella ricerca, utilizzare il filtro di categoria. Per rimuovere un oggetto dalla selezione basta cliccare sulla crocetta rossa.`,
    itemSelectionSecondParagraph: `Una volta aggiunto un oggetto, se ne puo' modificare la quantita' inserendo un ammontare nell'input sottostante e premendo "+" per aggiungere o "-" per rimuovere.`,
    itemSelectionThirdParagraph: `Terminata la selezione, premere il bottone "Avanti".`,
    categoryPlaceholder: 'Selezionare categoria',
    tierPlaceholder: 'Selezionare tier',
    searchBarPlaceholder: 'Ricerca',
    resetButton: 'Reset',
    askForQualityCheckbox: 'Richiedi qualità oggetto',
    selectedItems: 'Oggetti Selezionati:',
    clearButton: 'Pulisci',
    forwardButton: 'Avanti',
    itemRolling: 'Selezione giocatori:',
    itemRollingFirstParagraph: `Aggiungere giocatori alla lista digitando il nome e premendo Invio o il tasto "Aggiungi". Per rimuovere un giocatore dalla lista, cliccare sul nome.`,
    itemRollingSecondParagraph: `Per eseguire il roll e distribuire gli oggetti, premere il tasto "Roll".`,
    playerPlaceholder: 'Nome giocatore',
    addPlayerButton: 'Aggiungi',
    rollResults: 'Risultato del roll:',
    lootEsteem: 'Valore stimato oggetti:',
    donateButton: 'Fai una donazione',
    donationParagraph:
      'Se hai trovato questo strumento utile, puoi fare una donazione per sostenerne lo sviluppo.'
  },
  english: {
    itemSelection: 'Items selection:',
    itemSelectionFirstParagraph: `To select an item, start by typing the item name in the search bar. Items can be filtered by category and tier. Clicking on an item will allow
    for quality selection and add the item to the selection table. If an item does not show up during search, try using the category and/or tier filter. To remove an item from selection simply click on the red cross.`,
    itemSelectionSecondParagraph:
      'Once you added an item, you can modify its quantity by entering an amount in the input below it and pressing "+" to add and "-" to remove.',
    itemSelectionThirdParagraph: `Once the selection is complete, press the green button "Next".`,
    categoryPlaceholder: 'Select category',
    tierPlaceholder: 'Select tier',
    searchBarPlaceholder: 'Search',
    resetButton: 'Reset',
    askForQualityCheckbox: 'Ask for item quality',
    selectedItems: 'Selected items:',
    clearButton: 'Clear',
    forwardButton: 'Next',
    itemRolling: 'Players selection:',
    itemRollingFirstParagraph: `Add players to the list by typing in the name and pressing Enter or the "Add" button. To remove a player from the list, simply click on its name.`,
    itemRollingSecondParagraph: `To perform the roll and distribute the items, press "Roll".`,
    playerPlaceholder: 'Player name',
    addPlayerButton: 'Add',
    rollResults: 'Roll result:',
    lootEsteem: 'Estimated items value:',
    donateButton: 'Donate',
    donationParagraph:
      'If you found this tool useful, you can donate to support development.'
  }
}

export const INPUT_SANITIZE_REGEXP = /[^a-z\d\s.']/gi
export const ITEM_CATEGORIES = [
  'Artefacts',
  'Cloth Armor',
  'Cloth Helmet',
  'Cloth Shoes',
  'Leather Armor',
  'Leather Helmet',
  'Leather Shoes',
  'Plate Armor',
  'Plate Helmet',
  'Plate Shoes',
  'Gatherer',
  'Axes',
  'Bows',
  'Crossbows',
  'Daggers',
  'Hammers',
  'Maces',
  'Quarterstaffs',
  'Spears',
  'Swords',
  'Arcane Staffs',
  'Cursed Staffs',
  'Fire Staffs',
  'Frost Staffs',
  'Holy Staffs',
  'Nature Staffs',
  'Books',
  'Tools',
  'Shields',
  'Torches',
  'Potions',
  'Capes',
  'Bags',
  'Mounts',
  'Food',
  'Tomes',
  'Fiber',
  'Fish',
  'Hide',
  'Ore',
  'Rock',
  'Wood',
  'Cloth',
  'Leather',
  'Metal Bars',
  'Stone Blocks',
  'Wood Planks'
]

export const NO_QUALITY_CATEGORIES = [
  'Artefacts',
  'Tools',
  'Potions',
  'Mounts',
  'Tomes',
  'Food',
  'Fiber',
  'Fish',
  'Hide',
  'Ore',
  'Rock',
  'Wood',
  'Cloth',
  'Leather',
  'Metal Bars',
  'Stone Blocks',
  'Wood Planks'
]
