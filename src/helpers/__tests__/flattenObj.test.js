const { flattenObj } = require('../flattenObj')

describe('Flatten Object', () => {
  test('it should flatten the obj with one nested obj key', () => {
    const nested = {
      first: {
        second: {
          third: 'val'
        }
      }
    }

    const expected = {
      'first.second.third': 'val'
    }

    expect(flattenObj(nested)).toEqual(expected)
  })

  test('it should flatten the obj with multiple nested obj keys', () => {
    const nested = {
      first: {
        second: {
          third: 'val'
        }
      },
      fourth: {
        fifth: 'another val'
      },
      sixth: 'example'
    }

    const expected = {
      'first.second.third': 'val',
      'fourth.fifth': 'another val',
      sixth: 'example'
    }

    expect(flattenObj(nested)).toEqual(expected)
  })

  test('it should leave a simple object alone', () => {
    const nested = {
      first: 'val'
    }

    const expected = {
      first: 'val'
    }

    expect(flattenObj(nested)).toEqual(expected)
  })

  test('it should return floats in nested objects', () => {
    const nested = {
      first: {
        second: {
          third: 0.2,
          fourth: 0.3
        }
      },
      fifth: {
        sixth: 0.4,
        seventh: 0.5
      }
    }

    const expected = {
      'first.second.third': 0.2,
      'first.second.fourth': 0.3,
      'fifth.sixth': 0.4,
      'fifth.seventh': 0.5
    }

    expect(flattenObj(nested)).toEqual(expected)
  })

  test('it should return arrays and float in nested objects', () => {
    const nested = {
      first: {
        second: {
          third: [1, 2, 3],
          fourth: [4, 5, 6]
        }
      },
      fifth: {
        sixth: 0.4,
        seventh: 0.5,
        eighth: {
          ninth: {
            tenth: 10,
            eleventh: [11, 11, 11]
          }
        }
      }
    }

    const expected = {
      'first.second.third': [1, 2, 3],
      'first.second.fourth': [4, 5, 6],
      'fifth.sixth': 0.4,
      'fifth.seventh': 0.5,
      'fifth.eighth.ninth.tenth': 10,
      'fifth.eighth.ninth.eleventh': [11, 11, 11]
    }

    expect(flattenObj(nested)).toEqual(expected)
  })

  test('it should handle null + undefined', () => {
    expect(flattenObj(null)).toEqual({})
    expect(flattenObj(undefined)).toEqual({})
  })

  test('it should handle the empty object', () => {
    expect(flattenObj({})).toEqual({})
  })

  test('it should handle the empty argument', () => {
    expect(flattenObj()).toEqual({})
  })
})
