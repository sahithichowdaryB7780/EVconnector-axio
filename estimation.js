const express = require('express');
const app = express();

// Endpoint to estimate charging time
app.get('/estimate-charging-time', (req, res) => {
  // Extract inputs from query parameters
  const connectorPower = parseFloat(req.query.power);
  const stateOfCharge = parseFloat(req.query.soc);
  const batteryCapacity = parseFloat(req.query.battcapacity);
  // Calculate charging time (a basic example)

  const intermediateValue = (batteryCapacity / connectorPower);
  const chargingTime = (intermediateValue) - (intermediateValue * (stateOfCharge / 100));

  // Send response with the estimated charging time
  res.status(200).json({chargingTime});
});

const PORT = 3000;
module.exports = app.listen(PORT);


