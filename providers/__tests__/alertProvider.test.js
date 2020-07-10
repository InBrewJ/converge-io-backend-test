const { withAlert } = require('../alertProvider')

describe('alertProvider sanity', () => {
  test('it should return the callback assigned to it', async () => {
    const cb0 = () => {
      return [1, 2, 3]
    }
    const cb1 = () => {
      return [4, 5, 6]
    }

    expect(await withAlert(null, null, null, cb0)).toEqual([1, 2, 3])
    expect(await withAlert(null, null, null, cb1)).toEqual([4, 5, 6])
  })
})
