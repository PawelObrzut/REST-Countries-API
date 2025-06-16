import DATA from '../database/data.json'
import { keyFilter } from '../utils/keyFilter'

export const fetchAllCountries = async () => {
  return await DATA.map( country => keyFilter(country, ['name', 'flag', 'population', 'region', 'capital']))
}