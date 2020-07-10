const { destination } = require('../emailOut')

describe('Email destination', () => {
  test('Should send an email with a valid address, subject and message', () => {
    const destRes = destination.send({
      to: 'jason.brewer101@gmail.com',
      from: 'converge.lite"urawizard.com',
      subject: 'Alert! There is an email!',
      message: 'Not spam'
    })
    expect(destRes).toEqual({ success: true })
  })
})
