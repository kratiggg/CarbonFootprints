import React, { useState, useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Exploration from '/src/main/Exploration';
import Extraction from '/src/main/Extraction';
import Processing from '/src/main/Processing';
import Transportation from '/src/main/Transportation';
import Ventilation from '/src/main/Ventilation';
import Water from '/src/main/Water';

ChartJS.register(ArcElement, Tooltip, Legend);

const CarbonFootprintApp = () => {
    const [totalEmissions, setTotalEmissions] = useState(0);
    const [emissionsByProcess, setEmissionsByProcess] = useState({
        exploration: 0,
        extraction: 0,
        processing: 0,
        transportation: 0,
        ventilation: 0,
        water: 0,
    });

    const emissionsRef = useRef(0);

    const handleUpdateEmissions = (emissions, process) => {
        emissionsRef.current += emissions;
        setTotalEmissions(emissionsRef.current);
        setEmissionsByProcess((prev) => ({
            ...prev,
            [process]: prev[process] + emissions,
        }));
    };

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.setItem('totalEmissions', '0');
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    // AI Recommendation based on total emissions
    const getAIRecommendation = () => {
        // Calculate the number of hectares required to offset the emissions
        const hectareOfLand = totalEmissions * (1 / 20); // Example ratio: 1 hectare per 20 kg CO2
    
        // Determine the recommendation based on total emissions
        let recommendation;
        if (totalEmissions < 100000) {
            recommendation = "Maintain current strategies and monitor closely. Implement energy efficiency measures and optimize processes.";
        } else if (totalEmissions < 300000) {
            recommendation = "Consider optimizing your processes to reduce emissions further.";
        } else {
            recommendation = "High carbon footprint detected! It's recommended to significantly improve efficiency and explore sustainable alternatives.";
        }
    
        // Return the recommendation along with the hectare of land required
        return `${recommendation} To offset these emissions, you would need approximately ${hectareOfLand.toFixed(2)} hectares of Mature Forest`;
    };

    const pieData = {
        labels: ['Exploration', 'Extraction', 'Processing', 'Transportation', 'Ventilation', 'Water Management'],
        datasets: [
            {
                data: [
                    emissionsByProcess.exploration,
                    emissionsByProcess.extraction,
                    emissionsByProcess.processing,
                    emissionsByProcess.transportation,
                    emissionsByProcess.ventilation,
                    emissionsByProcess.water,
                ],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0', '#9966FF'],
                hoverOffset: 20, 
                borderWidth: 2,
                borderColor: '#fff',
            },
        ],
    };

    const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 2,
        plugins: {
            legend: {
                position: 'right',
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                bodyFont: {
                    size: 20,
                },
            },
        },
    };

    return (
        <div>
            <h1>Coal Mining Carbon Footprint Calculator</h1>
            <Exploration onUpdateEmissions={(emissions) => handleUpdateEmissions(emissions, 'exploration')} />
            <Extraction onUpdateEmissions={(emissions) => handleUpdateEmissions(emissions, 'extraction')} />
            <Processing onUpdateEmissions={(emissions) => handleUpdateEmissions(emissions, 'processing')} />
            <Transportation onUpdateEmissions={(emissions) => handleUpdateEmissions(emissions, 'transportation')} />
            <Ventilation onUpdateEmissions={(emissions) => handleUpdateEmissions(emissions, 'ventilation')} />
            <Water onUpdateEmissions={(emissions) => handleUpdateEmissions(emissions, 'water')} />
            <div>
                <h2>Total Carbon Footprint: {totalEmissions.toFixed(2)} kg CO2</h2>
               
            </div>
            <div>
                <h2>Process Composition contributing into Carbon Emission</h2>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
                    <div style={{ width: '400px', height: '400px' }}>
                        <Pie data={pieData} options={pieOptions} />
                    </div>
                    <p><strong>Recommendation:</strong> {getAIRecommendation()}</p>
                </div>
            </div>
        </div>
    );
};

export default CarbonFootprintApp;
