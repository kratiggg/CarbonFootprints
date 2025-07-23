import React, { useState, useEffect } from 'react';

const Processing = ({ onUpdateEmissions }) => {
    const [machineryData, setMachineryData] = useState({
        crusher: { consumption: '', emissionFactor: 0.5, unit: 'kW' },
        screeningPlant: { consumption: '', emissionFactor: 0.5, unit: 'kW' },
        conveyorSystem: { consumption: '', emissionFactor: 0.5, unit: 'kW' },
        dustSuppressionSystem: { consumption: '', emissionFactor: 0.5, unit: 'kW' },
        beltPressFilter: { consumption: '', emissionFactor: 0.5, unit: 'kW' }
    });

    const [carbonFootprint, setCarbonFootprint] = useState(0);

    const calculateCarbonFootprint = () => {
        let totalEmissions = 0;
        Object.values(machineryData).forEach(machine => {
            totalEmissions += machine.consumption * machine.emissionFactor;
        });
        setCarbonFootprint(totalEmissions);
        onUpdateEmissions(totalEmissions);
    };

    useEffect(() => {
        calculateCarbonFootprint(); // Recalculate the carbon footprint whenever machineryData changes
    }, [machineryData]);

    return (
        <div style={styles.container}>
            <h2>Processing</h2>
            <div style={styles.machineryList}>
                {Object.entries(machineryData).map(([key, machine]) => (
                    <div key={key} style={styles.machineryItem}>
                        <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                        <input
                            type="number"
                            value={machine.consumption}
                            onChange={(e) => {
                                const newConsumption = parseFloat(e.target.value);
                                setMachineryData(prevState => ({
                                    ...prevState,
                                    [key]: {
                                        ...machine,
                                        consumption: isNaN(newConsumption) ? 0 : newConsumption
                                    }
                                }));
                            }}
                            style={styles.input}
                        />
                        <span>{machine.unit}</span>
                    </div>
                ))}
            </div>
            <div>
                <h3>Total Carbon Footprint for Processing: {carbonFootprint.toFixed(2)} kg CO2</h3>
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    machineryList: {
        marginBottom: '20px',
    },
    machineryItem: {
        marginBottom: '10px',
    },
    input: {
        marginLeft: '10px',
        padding: '5px',
        width: '80px',
    },
};

export default Processing;
