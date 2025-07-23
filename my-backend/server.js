const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle emissions data from all six pages
app.post("/api/total-emissions", (req, res) => {
  const {
    explorationEmissions,
    extractionEmissions,
    ventilationEmissions,
    waterManagementEmissions,
    processingEmissions,
    transportationEmissions
  } = req.body;

  // Calculate the total emissions
  const totalEmissions =
    explorationEmissions +
    extractionEmissions +
    ventilationEmissions +
    waterManagementEmissions +
    transportationEmissions +
    processingEmissions;

  res.json({
    success: true,
    totalEmissions: totalEmissions,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
