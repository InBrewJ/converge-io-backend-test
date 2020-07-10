const { requestToFilter } = require('../../helpers/requestParser')
const SensorEvents = require('../models').t_sensor_events
const errorHandler = require('../../helpers/errorHandler').errorHandler

function put(req, res) {
  const { sensorId = null, time = null, value = null } = req.body

  if (time === null || sensorId === null) {
    // needs to return json, I believe
    // needs a generic error handler
    // use the packetParser
    res.status(400).send('Sensor events: Corrupt packet')
    return
  }

  return SensorEvents.create({
    sensorId,
    time,
    value
  })
    .then((sensorEvent) => res.status(204).send(sensorEvent))
    .catch((error) => errorHandler(error, res))
}

function get(req, res) {
  const filter = requestToFilter(req)
  return SensorEvents.findAll(filter)
    .then((sensorEvents) => res.status(200).send(sensorEvents))
    .catch((error) => errorHandler(error, res))
}

module.exports = {
  put,
  get
}
