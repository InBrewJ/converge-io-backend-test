const { requestToFilter } = require('../../helpers/requestParser')
const SensorAlerts = require('../models').t_sensor_alerts
const errorHandler = require('../../helpers/errorHandler').errorHandler

function put(req, res) {
  const { sensorId = null, time = null, value = null } = req.body

  if (time === null || sensorId === null) {
    // needs to return json, I believe
    // needs a generic error handler
    // use the packetParser
    res.status(400).send('Corrupt packet')
    return
  }

  return SensorAlerts.create({
    sensorId,
    time,
    value
  })
    .then((sensorAlert) => res.status(204).send(sensorAlert))
    .catch((error) => errorHandler(error, res))
}

function get(req, res) {
  const filter = requestToFilter(req)
  return SensorAlerts.findAll(filter)
    .then((sensorAlerts) => res.status(200).send(sensorAlerts))
    .catch((error) => errorHandler(error, res))
}

module.exports = {
  put,
  get
}
