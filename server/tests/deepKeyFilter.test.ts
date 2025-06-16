import { keyFilter } from '../utils/keyFilter'

describe('The keyFilter function', () => {
  it('returns only selected key:value pairs indicated by the keys array', () => {
    const mockObject = {
      'fruit': 'mango',
      'year': 1990,
      'regions' : ['Europe', 'Indonesia', 'South America'],
      'applications': {
        'standard': 'cooking',
        'extra': ['zoo', 'compost']
      },
      'color': 'yellow'
    }
    const fiteredObject = keyFilter(mockObject, ['year', 'regions'])

    expect(fiteredObject).not.toMatchObject(mockObject)
    expect(fiteredObject).not.toHaveProperty('color')
    expect(Object.keys(fiteredObject).sort()).toEqual(['year', 'regions'].sort());
  })
})