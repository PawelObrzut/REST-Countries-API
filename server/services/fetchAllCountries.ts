import DATA from '../database/data.json'
import { deepKeyFilter } from '../utils/deepKeyFilter'

export const fetchAllCountries = async () => {
  return await DATA.map( country => deepKeyFilter(country, ['name', 'flag', 'population', 'region', 'capital']))
}