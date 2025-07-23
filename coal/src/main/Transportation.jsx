import React, { useState, useEffect } from "react";

function Transportation({ onUpdateEmissions }) {
  const initialMachines = {
    "Mine Hoist/Elevator": { usage: 0, fuelType: "Electricity", consumption: 100 },
    "Shuttle Car": { usage: 0, fuelType: "Electricity", consumption: 90 },
    "Load-Haul-Dump (LHD)": { usage: 0, fuelType: "Diesel", consumption: 65 },
    "Underground Conveyor System": { usage: 0, fuelType: "Electricity", consumption: 1500 },
    "Rail Transport (Mine Locomotive)": { usage: 0, fuelType: "Electricity", consumption: 200 }
  };

  const [machines, setMachines] = useState(initialMachines);
  const [carbonFootprint, setCarbonFootprint] = useState(0);

  const emissionFactors = {
    Electricity: 0.5, // kg CO2/kWh
    Diesel: 2.67, // kg CO2/liter
  };

  const calculateCarbonFootprint = () => {
    let totalFootprint = 0;

    for (let machine in machines) {
      const { usage, fuelType, consumption } = machines[machine];
      if (usage > 0) {
        const factor = emissionFactors[fuelType];
        const totalConsumption = consumption * usage;
        totalFootprint += totalConsumption * factor;
      }
    }

    setCarbonFootprint(totalFootprint.toFixed(2));
    onUpdateEmissions(totalFootprint);
  };

  useEffect(() => {
    calculateCarbonFootprint(); // Calculate carbon footprint initially and whenever data changes
  }, [machines]);

  const handleInputChange = (machine, key, value) => {
    setMachines({
      ...machines,
      [machine]: {
        ...machines[machine],
        [key]: value,
      },
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Transportation</h1>

      {Object.keys(machines).map((machine) => (
        <div key={machine} style={{ marginBottom: "20px" }}>
          <h3>{machine}</h3>
          <label>
            Usage Time (in hours):
            <input
              type="number"
              value={machines[machine].usage}
              onChange={(e) => handleInputChange(machine, "usage", parseFloat(e.target.value) || 0)}
            />
          </label>

          <br /><br />

          <label>
            Fuel Type:
            <select
              value={machines[machine].fuelType}
              onChange={(e) => handleInputChange(machine, "fuelType", e.target.value)}
            >
              <option value="Electricity">Electricity</option>
              <option value="Diesel">Diesel</option>
            </select>
          </label>
        </div>
      ))}

      <button onClick={calculateCarbonFootprint} style={{ padding: "10px", backgroundColor: "#28a745", color: "white", border: "none", cursor: "pointer" }}>
        Calculate Carbon Footprint
      </button>

      <br /><br />

      <div>
        <h2>Estimated Total Carbon Footprint: {carbonFootprint} kg CO2</h2>
      </div>
    </div>
  );
}

export default Transportation;
