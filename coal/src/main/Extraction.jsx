import React, { useState, useEffect } from 'react';

const Exploration = ({ onUpdateEmissions }) => {
    const initialEquipmentState = {
       
        'Continuous Miner': '',
        'Longwall Shearer': '',
        'Shuttle Car': '',
        'Roof Bolter': '',
        'Load-Haul-Dump (LHD)': '',
    };

    const [equipmentConsumption, setEquipmentConsumption] = useState(initialEquipmentState);
    const [totalCarbonFootprint, setTotalCarbonFootprint] = useState(null);

    const equipmentEmissionFactors = {
        
        'Continuous Miner': { unit: 'MW', factor: 743 }, // Electricity (MW)
        'Longwall Shearer': { unit: 'MW', factor: 743 }, // Electricity (MW)
        'Shuttle Car': { unit: 'kW', factor: 0.000743 }, // Electricity (kW)
        'Roof Bolter': { unit: 'kW', factor: 0.000743 }, // Electricity (kW)
        'Load-Haul-Dump (LHD)': { unit: 'liters/hour', factor: 2.68 }, // Diesel
    };

    useEffect(() => {
        const savedFootprint = localStorage.getItem('totalCarbonFootprint');
        const savedEquipmentConsumption = localStorage.getItem('equipmentConsumption');

        if (savedFootprint) {
            setTotalCarbonFootprint(parseFloat(savedFootprint));
        }
        if (savedEquipmentConsumption) {
            setEquipmentConsumption(JSON.parse(savedEquipmentConsumption));
        }
    }, []);

    const handleInputChange = (equipment, value) => {
        setEquipmentConsumption({
            ...equipmentConsumption,
            [equipment]: value
        });
    };

    const handleCalculate = () => {
        let totalFootprint = 0;

        for (const equipment in equipmentConsumption) {
            const consumption = parseFloat(equipmentConsumption[equipment]) || 0;
            const { factor } = equipmentEmissionFactors[equipment];
            totalFootprint += consumption * factor;
        }

        setTotalCarbonFootprint(totalFootprint);
        onUpdateEmissions(totalFootprint);

        // Save the result and inputs in localStorage
        localStorage.setItem('totalCarbonFootprint', totalFootprint);
        localStorage.setItem('equipmentConsumption', JSON.stringify(equipmentConsumption));
    };

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto', backgroundColor: '#a5a4a4', borderRadius: '10px' }}>
            <h2 style={{ textAlign: 'center', color: '#333' }}>Extraction</h2>
            
            {Object.keys(equipmentEmissionFactors).map((equipment) => (
                <div key={equipment} style={{ marginBottom: '15px' }}>
                    <label htmlFor={equipment} style={{ display: 'block', marginBottom: '5px' }}>
                        {equipment} Consumption ({equipmentEmissionFactors[equipment].unit}):
                    </label>
                    <input
                        type="number"
                        id={equipment}
                        value={equipmentConsumption[equipment]}
                        onChange={(e) => handleInputChange(equipment, e.target.value)}
                        placeholder={`Enter consumption for ${equipment}`}
                        style={{ width: '100%', padding: '8px', borderRadius: '5px' }}
                    />
                </div>
            ))}

            <button
                onClick={handleCalculate}
                style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}
            >
                Calculate Total Carbon Footprint
            </button>

            {totalCarbonFootprint !== null && (
                <div style={{ marginTop: '20px', textAlign: 'center', backgroundColor: '#cfbfbf', padding: '15px', borderRadius: '5px' }}>
                    <h3>Total Carbon Footprint</h3>
                    <p>Total CO2 Emission: {totalCarbonFootprint.toFixed(2)} kg CO2</p>
                </div>
            )}
        </div>
    );
};

export default Exploration;
