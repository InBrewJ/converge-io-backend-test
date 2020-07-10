const SensorAlerts = require('../server/models').t_sensor_alerts

const withAlert = (sensorId, time, value, cb) => {
  return SensorAlerts.findAll({
    where: {
      sensorId
    }
  })
    .then((sensorAlerts) => {
      console.log('sensor alert in withAlert :: ', sensorAlerts)
    })
    .catch((error) => errorHandler(error, res))
    .finally(() => cb(sensorId, time, value))
}

module.exports = {
  withAlert
}
