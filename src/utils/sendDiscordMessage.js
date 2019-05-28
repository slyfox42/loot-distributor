import capitalize from 'lodash/capitalize'
import fetch from 'node-fetch'

const sendResultsToDiscord = async results => {
  let message = Object.entries(results)
    .map(([name, value]) => {
      const items = value.items.reduce(
        (acc, curr) => acc + `- ${curr.quantity} x ${curr.objectName}\n`,
        ''
      )
      return `[${capitalize(
        name
      )}] - Valore totale stimato: ${value.totalValue.toLocaleString(
        'it-IT'
      )}\n\n${items}`
    })
    .reduce(
      (acc, curr) => (acc ? acc + '\n' + curr : acc + curr),
      '```ini\nRisultato roll:\n'
    )
  message += '```'

  return fetch(
    `https://discordapp.com/api/v6/channels/${
      process.env.REACT_APP_CHANNEL_ID
    }/messages`,
    {
      method: 'POST',
      body: JSON.stringify({
        content: message
      }),
      headers: {
        Authorization: `Bot ${process.env.REACT_APP_BOT_TOKEN}`,
        'Content-Type': 'multipart/form-data'
      }
    }
  )
}

export default sendResultsToDiscord
