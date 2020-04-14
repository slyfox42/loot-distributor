export const IMAGE_BASE_URL =
  'https://gameinfo.albiononline.com/api/gameinfo/items/'

export const LOCALES = {
  english: 'en-US',
  italian: 'it-IT'
}

export const APP_DESCRIPTIONS = {
  italian: {
    itemSelection: 'Selezione oggetti',
    itemSelectionFirstParagraph: `Per selezionare un oggetto, digitare il nome dell'oggetto nella barra di ricerca. Gli oggetti possono essere filtrati per categoria e tier.
    Cliccando un oggetto e' possibile selezionare la qualita' e aggiungerlo alla tabella di destra. Se un oggetto non appare nella ricerca, utilizzare il filtro di categoria. Per rimuovere un oggetto dalla selezione basta cliccare sulla crocetta rossa.`,
    itemSelectionSecondParagraph: `Una volta aggiunto un oggetto, se ne puo' modificare la quantita' inserendo un ammontare nell'input sottostante e premendo "+" per aggiungere o "-" per rimuovere.`,
    itemSelectionThirdParagraph: `Se un oggetto non compare nella lista dopo aver digitato le sue iniziali, scrivere il nome completo.`,
    itemSelectionFourthParagraph: `Terminata la selezione, premere il bottone "Avanti".`,
    chestLogImport: 'Importazione log delle casse',
    chestLogImportFirstParagraph:
      'Per importare i log dal gioco, depositare tutti gli oggetti dentro una cassa di qualunque tier preferibilmente vuota. Attendere 2 minuti affinchè il gioco aggiorni i log, dopodichè premere il tasto "Chest Log".',
    chestLogImportSecondParagraph: `Dopo aver controllato che tutti gli oggetti appaiono nel log della cassa, premere il tasto "Copy to clipboard" vicino alla scritta "Amount". Ora che il contenuto del log è copiato, premere "Importare log di una cassa" su questo tool e incollare il tutto nell'apposito spazio.`,
    chestLogImportThirdParagraphPartOne:
      'Nota bene: il tool riconoscerà solo gli oggetti depositati ',
    chestLogImportThirdParagraphPartTwo:
      ' per evitare incongruenze a causa di log datati.',
    chestLogTime: 'NEGLI ULTIMI DIECI MINUTI',
    adjustPricesParagraph: `E' consigliato fare un rapido controllo dei prezzi prima di eseguire lo split in quanto alcuni di essi potrebbero essere datati e necessitano di una modifica manuale. Basta cliccare sul singolo prezzo e modificarlo.`,
    categoryPlaceholder: 'Selezionare categoria',
    tierPlaceholder: 'Selezionare tier',
    searchBarPlaceholder: 'Ricerca',
    resetButton: 'Reset',
    askForQualityCheckbox: 'Richiedi qualità oggetto',
    selectedItems: 'Oggetti Selezionati:',
    estimatedGrandTotal: 'Totale stimato:',
    clearButton: 'Pulisci',
    openLogsDialogButton: 'Importare log di una cassa',
    logsImportDialogTitle: 'Incollare i log e premere "Importa"',
    logsImportButton: 'Importa',
    forwardButton: 'Avanti',
    itemRolling: 'Selezione giocatori',
    itemRollingFirstParagraph: `Aggiungere giocatori alla lista digitando il nome e premendo Invio o il tasto "Aggiungi". Per rimuovere un giocatore dalla lista, cliccare sul nome.`,
    itemRollingSecondParagraph: `Per eseguire il roll e distribuire gli oggetti, premere il tasto "Spartire oggetti".`,
    playerPlaceholder: 'Nome giocatore',
    addPlayerButton: 'Aggiungi',
    rollButton: 'Spartire oggetti',
    rollResults: 'Risultato del roll:',
    lootEsteem: 'Valore stimato oggetti:',
    donateButton: 'Fai una donazione',
    donationParagraph:
      'Se hai trovato utile questo strumento, puoi fare una donazione tramite PayPal per sostenerne lo sviluppo.',
    lootError: 'Inserire una lista di oggetti da spartire!',
    pricesError: 'Assicurarsi che ogni oggetto abbia il prezzo inserito!',
    playersError:
      'Inserire una lista di giocatori tra cui spartire gli oggetti!'
  },
  english: {
    itemSelection: 'Items selection',
    itemSelectionFirstParagraph: `To select an item, start by typing the item name in the search bar. Items can be filtered by category and tier. Clicking on an item will allow
    for quality selection and add the item to the selection table. If an item does not show up during search, try using the category and/or tier filter. To remove an item from selection simply click on the red cross.`,
    itemSelectionSecondParagraph:
      'Once you added an item, you can modify its quantity by entering an amount in the input below it and pressing "+" to add and "-" to remove.',
    itemSelectionThirdParagraph: `If an item doesn't show up in the list when typing its initials, try writing its complete name.`,
    itemSelectionFourthParagraph: `Once the selection is complete, press the green button "Next".`,
    chestLogImport: 'Chest logs import',
    chestLogImportFirstParagraph:
      'To import chest logs from the game, drop all the items inside a (preferably empty) chest of any tier. Wait for 2 minutes as the game needs time to update the logs, then press on the "Chest Log" button.',
    chestLogImportSecondParagraph: `Once you made sure that all the items show up in the ingame chest log, press the "Copy to clipboard" button right next to "Amount". Now that the log content is copied, press "Import chest logs" button on this tool and paste everything inside.`,
    chestLogImportThirdParagraphPartOne:
      'Please note that the tool will only parse items that have been deposited ',
    chestLogImportThirdParagraphPartTwo: ' to avoid issues with older logs.',
    chestLogTime: 'WITHIN TEN MINUTES',
    adjustPricesParagraph:
      'It is recommended to check the item prices before performing the split, as some prices might be dated and might need manual adjusting. Just click on the single price and edit it.',
    categoryPlaceholder: 'Select category',
    tierPlaceholder: 'Select tier',
    searchBarPlaceholder: 'Search',
    resetButton: 'Reset',
    askForQualityCheckbox: 'Ask for item quality',
    selectedItems: 'Selected items',
    estimatedGrandTotal: 'Estimated grand total:',
    clearButton: 'Clear',
    openLogsDialogButton: 'Import chest logs',
    logsImportDialogTitle: 'Paste the chest logs and press "Import"',
    logsImportButton: 'Import',
    forwardButton: 'Next',
    itemRolling: 'Players selection',
    itemRollingFirstParagraph: `Add players to the list by typing in the name and pressing Enter or the "Add" button. To remove a player from the list, simply click on its name.`,
    itemRollingSecondParagraph: `To perform the roll and distribute the items, press "Roll".`,
    playerPlaceholder: 'Player name',
    addPlayerButton: 'Add',
    rollButton: 'Roll',
    rollResults: 'Roll result:',
    lootEsteem: 'Estimated items value:',
    donateButton: 'Donate',
    donationParagraph:
      'If you found this tool useful, you can donate via PayPal to support development.',
    lootError: 'Please insert a list of items to be split!',
    pricesError: 'Please make sure all item prices have been set!',
    playersError: 'Please insert player names to perform the roll!'
  },
  portuguese: {
    itemSelection: 'Seleção de itens',
    itemSelectionFirstParagraph: `Para selecionar um item, comece a digitar o nome dele na barra de pesquisa. Itens podem ser filtrados por categoria e grau.
    Clicar em um item permitirá selecionar sua qualidade e adicioná-lo no painel de seleção. Se algum item não aparecer durante a busca, tente usar os filtros de categoria e grau. Para remover um item da seleção, simplesmente clique no X vermelho.`,
    itemSelectionSecondParagraph: `Depois de adicionar um item, você pode modificar sua quantidade digitando no campo abaixo dele ou pressionando "+" para adicionar e "-" para remover.`,
    itemSelectionThirdParagraph: '',
    itemSelectionFourthParagraph:
      'Após selecionar todos os itens, pressione o botão verde "Próximo".',
    chestLogImport: 'Chest logs import',
    chestLogImportFirstParagraph:
      'To import chest logs from the game, drop all the items inside a (preferably empty) chest of any tier. Wait for 2 minutes as the game needs time to update the logs, then press on the "Chest Log" button.',
    chestLogImportSecondParagraph: `Once you made sure that all the items show up in the ingame chest log, press the "Copy to clipboard" button right next to "Amount". Now that the log content is copied, press "Import chest logs" button on this tool and paste everything inside.`,
    chestLogImportThirdParagraphPartOne:
      'Please note that the tool will only parse items that have been deposited ',
    chestLogImportThirdParagraphPartTwo: ' to avoid issues with older logs.',
    chestLogTime: 'WITHIN TEN MINUTES',
    adjustPricesParagraph:
      'It is recommended to check the item prices before performing the split, as some prices might be dated and might need manual adjusting. Just click on the single price and edit it.',
    categoryPlaceholder: 'Selecionar categoria',
    tierPlaceholder: 'Selecionar grau',
    searchBarPlaceholder: 'Pesquisar',
    resetButton: 'Recomeçar',
    askForQualityCheckbox: 'Perguntar qualidade do item',
    selectedItems: 'Itens selecionados',
    estimatedGrandTotal: 'Total geral estimado:',
    clearButton: 'Limpar',
    openLogsDialogButton: 'Importar histórico de baú',
    logsImportDialogTitle: 'Cole o histórico do seu baú e pressione "Importar"',
    logsImportButton: 'Importar',
    forwardButton: 'Próximo',
    itemRolling: 'Seleção de jogadores',
    itemRollingFirstParagraph:
      'Adicione jogadores à lista digitando seu nome e pressionando Enter ou o botão "Adicionar". Para remover um jogador da lista, clique em seu nome.',
    itemRollingSecondParagraph:
      'Para rolar e distribuir os itens, pressione "Rolar".',
    playerPlaceholder: 'Nome do jogador',
    addPlayerButton: 'Adicionar',
    rollButton: 'Rolar',
    rollResults: 'Resultado da rolagem:',
    lootEsteem: 'Valor estimado dos itens:',
    donateButton: 'Doar',
    donationParagraph:
      'Se você gostou dessa ferramente, pode doar para mostrar seu suporte ao desenvolvimento.',
    lootError: 'Please insert a list of items to be split!',
    pricesError: 'Please make sure all item prices have been set!',
    playersError: 'Please insert player names to perform the roll!'
  }
}

export const INPUT_SANITIZE_REGEXP = /[^a-z\d\s.']/gi

export const CITIES = [
  'Bridgewatch',
  'Caerleon',
  'Fort Sterling',
  'Lymhurst',
  'Martlock',
  'Thetford'
]

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
  'Wood Planks',
  'Treasures',
  'Runes',
  'Souls',
  'Relics',
  'Journals',
  'Cape Crests'
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
  'Wood Planks',
  'Treasures',
  'Runes',
  'Souls',
  'Relics',
  'Journals',
  'Cape Crests',
  'Misc'
]

export const ITEM_QUALITIES = {
  '1': 'Normal',
  '2': 'Good',
  '3': 'Outstanding',
  '4': 'Excellent',
  '5': 'Masterpiece'
}
