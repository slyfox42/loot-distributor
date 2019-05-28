import capitalize from 'lodash/capitalize'

export default results => {
  const message = Object.entries(results)
    .map(([name, value]) => {
      const items = value.items.reduce(
        (acc, curr) => acc + `- ${curr.quantity} x ${curr.objectName}\n`,
        ''
      )
      return `**${capitalize(
        name
      )}** - Valore totale stimato: ${value.totalValue.toLocaleString(
        'it-IT'
      )}\n\n${items}`
    })
    .reduce(
      (acc, curr) => (acc ? acc + '\n' + curr : acc + curr),
      '\nRisultato roll:\n'
    )
  const el = document.createElement('textarea')
  el.value = message
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}
