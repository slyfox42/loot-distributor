import fetch from 'node-fetch'
import moment from 'moment'

const median = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b)
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
}

const filterBigDiffs = arr => {
  const sorted = arr.sort((a, b) => a - b)
  const minValue = sorted[0]
  const diffs = sorted
    .map((el, idx) => (arr[idx + 1] ? arr[idx + 1] - el : null))
    .filter(el => el !== null)
  const spike = diffs.find(el => el > minValue * 2)

  return spike ? arr.slice(0, diffs.indexOf(spike) + 1) : arr
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
  let allPrices = result
    .map(location => location.data.prices_avg)
    .reduce((acc, curr) => [...acc, ...curr], [])
  allPrices = filterBigDiffs(allPrices)
  const averagePrice = median(allPrices)

  return averagePrice
}

export default fetchAveragePrice
