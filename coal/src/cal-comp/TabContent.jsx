import React ,{ useState } from 'react';
import Exploration from '../main/Exploration';
import Extraction from '/src/main/Extraction';
import Transportation from '/src/main/Transportation';
import Ventilation from '/src/main/Ventilation';
import Water from '/src/main/Water';
import Processing from '/src/main/Processing';
import Total from '/src/main/Total';



const App = () => {
  const [activeTab, setActiveTab] = useState("Exploration");
  const [emissionsData, setEmissionsData] = useState({
    explorationEmissions: 0,
    extractionEmissions: 0,
    ventilationEmissions: 0,
    waterManagementEmissions: 0,
    processingEmissions: 0,
    transportation:0,
  });

  const handleEmissionsUpdate = (type, emissions) => {
    setEmissionsData((prevData) => ({
      ...prevData,
      [type]: emissions,
    }));
  };

  return (
    <div style={styles.app}>
      <div style={styles.tabNavigation}>
        <button
          style={activeTab === "Exploration" ? styles.activeTabButton : styles.tabButton}
          onClick={() => setActiveTab("Exploration")}
        >
          Exploration
        </button>
        <button
          style={activeTab === "Extraction" ? styles.activeTabButton : styles.tabButton}
          onClick={() => setActiveTab("Extraction")}
        >
          Extraction
        </button>
        <button
          style={activeTab === "Ventilation" ? styles.activeTabButton : styles.tabButton}
          onClick={() => setActiveTab("Ventilation")}
        >
          Ventilation
        </button>
        <button
          style={activeTab === "Water" ? styles.activeTabButton : styles.tabButton}
          onClick={() => setActiveTab("Water")}
        >
          Water Management
        </button>
        <button
          style={activeTab === "Processing" ? styles.activeTabButton : styles.tabButton}
          onClick={() => setActiveTab("Processing")}
        >
          Processing
        </button>
        <button
          style={styles.tabButton}
          onClick={() => setActiveTab("Transportation")}
        >
         Transportation
        </button>

        <button
          style={styles.tabButton}
          onClick={() => setActiveTab("Total")}
        >
          Total
        </button>
        
      </div>

      <div style={styles.tabContent}>
        {activeTab === "Exploration" && (
          <Exploration onEmissionsUpdate={(emissions) => handleEmissionsUpdate("explorationEmissions", emissions)} />
        )}
        {activeTab === "Transportation" && (
          <Transportation onEmissionsUpdate={(emissions) => handleEmissionsUpdate("drillingMachineEmissions", emissions)} />
        )}
        {activeTab === "Extraction" && (
          <Extraction onEmissionsUpdate={(emissions) => handleEmissionsUpdate("extractionEmissions", emissions)} />
        )}
        {activeTab === "Ventilation" && (
          <Ventilation onEmissionsUpdate={(emissions) => handleEmissionsUpdate("ventilationEmissions", emissions)} />
        )}
        {activeTab === "Water" && (
          <Water onEmissionsUpdate={(emissions) => handleEmissionsUpdate("waterManagementEmissions", emissions)} />
        )}
        {activeTab === "Processing" && (
          <Processing onEmissionsUpdate={(emissions) => handleEmissionsUpdate("processingEmissions", emissions)} />
        )}
       
        
        {activeTab === "Total" && <Total emissionsData={emissionsData} />}
      </div>
    </div>
  );
};

const styles = {
  app: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  tabNavigation: {
    marginBottom: "20px",
  },
  tabButton: {
    backgroundColor: "#f0f0f0",
    color: "#333",
    padding: "10px",
    marginRight: "5px",
    border: "1px solid #ccc",
    cursor: "pointer",
    borderRadius: "4px",
  },
  activeTabButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px",
    marginRight: "5px",
    border: "1px solid #ccc",
    cursor: "pointer",
    borderRadius: "4px",
  },
  tabContent: {
    marginTop: "20px",
  },
};

export default App;


