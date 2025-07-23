import React, { useState } from "react";

function Ventilation({ onUpdateEmissions }) {
  const [usage, setUsage] = useState(0); // in hours
  const [carbonFootprints, setCarbonFootprints] = useState({});
  const [totalFootprint, setTotalFootprint] = useState(null);

  // Factors in kg CO2 per kWh or kg CO2/liter
  const carbonFactors = {
    "Ventilation Fans": 0.5, 
    "Air Scrubber": 0.5, 
    "Air Heater": 0.5, 
    "Mine Ventilation Control System": 0.5, 
    "Blowers": 0.5, 
    "Emergency Escape Fans": 0.5, 
  };

  // Fuel/Electricity Consumption per hour for each machine
  const consumption = {
    "Ventilation Fans": 300, 
    "Air Scrubber": 100, 
    "Air Heater": 125, 
    "Mine Ventilation Control System": 12.5, 
    "Blowers": 60, 
    "Emergency Escape Fans": 65, 
  };

  const handleCalculation = () => {
    const newCarbonFootprints = {};
    let totalFootprint = 0;

    Object.keys(carbonFactors).forEach((machine) => {
      if (usage > 0) {
        const carbonFactor = carbonFactors[machine];
        const totalConsumption = consumption[machine] * usage;
        const footprint = totalConsumption * carbonFactor;
        newCarbonFootprints[machine] = footprint.toFixed(2); // Result in kg CO2
        totalFootprint += footprint;
      }
    });

    setCarbonFootprints(newCarbonFootprints);
    setTotalFootprint(totalFootprint.toFixed(2));

    // Update the total emissions in the parent component
    onUpdateEmissions(totalFootprint);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ventilation Machinery Carbon Footprint Calculator</h1>

      <label>
        Usage Time (in hours):
        <input
          type="number"
          value={usage}
          onChange={(e) => setUsage(parseFloat(e.target.value) || 0)}
        />
      </label>

      <br /><br />

      <button onClick={handleCalculation} style={{ padding: "10px", backgroundColor: "#28a745", color: "white", border: "none", cursor: "pointer" }}>
        Calculate Carbon Footprint
      </button>

      <br /><br />

      {Object.keys(carbonFootprints).length > 0 && (
        <div>
          <h2>Estimated Carbon Footprint per Machine:</h2>
          <ul>
            {Object.entries(carbonFootprints).map(([machine, footprint]) => (
              <li key={machine}>
                {machine}: {footprint} kg CO2
              </li>
            ))}
          </ul>
          <h2>Total Estimated Carbon Footprint: {totalFootprint} kg CO2</h2>
        </div>
      )}
    </div>
  );
}

export default Ventilation;
