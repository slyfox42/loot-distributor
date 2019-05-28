import { APP_DESCRIPTIONS, LOCALES } from '../constants'
import capitalize from 'lodash/capitalize'

export default (results, language) => {
  const message = Object.entries(results)
    .map(([name, value]) => {
      const items = value.items.reduce(
        (acc, curr) => acc + `- ${curr.quantity} x ${curr.objectName}\n`,
        ''
      )
      return `**${capitalize(name)}** - ${
        APP_DESCRIPTIONS[language].lootEsteem
      } ${value.totalValue.toLocaleString(LOCALES[language])}\n\n${items}`
    })
    .reduce(
      (acc, curr) => (acc ? acc + '\n' + curr : acc + curr),
      `\n**${APP_DESCRIPTIONS[language].rollResults}**:\n`
    )
  const el = document.createElement('textarea')
  el.value = message
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}
