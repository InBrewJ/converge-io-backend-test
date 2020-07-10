const SensorAlerts = require('../server/models').t_sensor_alerts

const handleAlert = async (value, dataValues) => {
  const { alertHigh, alertLow, method } = dataValues
  if (value > alertHigh || value < alertLow) {
    const { destination } = require(`./destinations/${method}Out`)
    return {
      method,
      alertSent: true,
      sentTo: 'jason.brewer101@gmail.com'
    }
  }
  return {
    method,
    alertSent: false,
    sentTo: 'jason.brewer101@gmail.com'
  }
}

const withAlert = async (sensorId, time, value, cb) => {
  try {
    const alertsRes = await SensorAlerts.findAll({
      where: {
        sensorId
      }
    })
    console.log('ar :: ', alertsRes)
    // There should only ever be one result
    // because of the constraints in Postgres
    // If something went wrong, take the first alert
    const [t_sensor_alerts = null] = alertsRes
    if (t_sensor_alerts) {
      // send alert
      const { dataValues } = t_sensor_alerts || {}
      handleAlert(value, dataValues)
    }

    // console.log(' :: ', dataValues)
  } catch (error) {
    console.log('error in find alerts :: ', error)
  } finally {
    return cb(sensorId, time, value)
  }
}

module.exports = {
  withAlert,
  handleAlert
}
