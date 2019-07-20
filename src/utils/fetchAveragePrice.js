import fetch from 'node-fetch'

const fetchAveragePrice = async (
  itemID,
  currentPrices,
  marketSource,
  isPriceExact = true
) => {
  const apiUrl = `https://www.albion-online-data.com/api/v1/stats/Charts/${itemID}?locations=${marketSource}`
  const result = await fetch(apiUrl).then(res => res.json())
  let averagePrice = 0

  if (!result.length) {
    const [id, enchantment] = itemID.split('@')
    isPriceExact = false
    if (!enchantment) {
      return {
        averagePrice,
        isPriceExact
      }
    }
    const newEnchantment =
      parseInt(enchantment) - 1 ? (parseInt(enchantment) - 1).toString() : ''

    return fetchAveragePrice(
      `${id}@${newEnchantment}`,
      currentPrices,
      marketSource,
      isPriceExact
    )
  }

  const { prices_min } = result[0].data
  averagePrice = prices_min[prices_min.length - 1]

  return {
    averagePrice,
    isPriceExact
  }
}

export default fetchAveragePrice
