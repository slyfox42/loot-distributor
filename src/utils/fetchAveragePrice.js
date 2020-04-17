import fetch from 'node-fetch'

const fetchAveragePrice = async (itemID, marketSource, quality = 1) => {
  const apiUrl = `https://www.albion-online-data.com/api/v2/stats/history/${itemID}?locations=${marketSource}&time-scale=1&qualities=${quality}`
  const result = await fetch(apiUrl).then(res => res.json())
  let averagePrice = 0

  if (!result.length) {
    return averagePrice
  }

  const { data } = result[0]
  const { avg_price } = data[data.length - 1]
  averagePrice = avg_price

  return averagePrice
}

export default fetchAveragePrice
