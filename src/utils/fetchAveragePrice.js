import fetch from 'node-fetch'
import moment from 'moment'

const median = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b)
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
}

const fetchAveragePrice = async itemID => {
  const oneMonthAgo = moment()
    .subtract(1, 'months')
    .format('MM-DD-YYYY')
  const apiUrl =
    `https://www.albion-online-data.com/api/v1/stats/charts/` +
    `${itemID}?date=${oneMonthAgo}` +
    `&locations=Caerleon,Lymhurst,Thetford,Martlock,Bridgewatch`
  const result = await fetch(apiUrl).then(res => res.json())

  if (!result.length) {
    const [id, enchantment] = itemID.split('@')
    if (!enchantment) {
      return 0
    }
    const newEnchantment =
      parseInt(enchantment) - 1 ? (parseInt(enchantment) - 1).toString() : ''

    return fetchAveragePrice(`${id}@${newEnchantment}`)
  }

  const allPrices = result
    .map(location => location.data.prices_avg)
    .reduce((acc, curr) => [...acc, ...curr], [])
  const averagePrice = median(allPrices)

  return averagePrice
}

export default fetchAveragePrice
