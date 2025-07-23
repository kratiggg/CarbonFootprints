import React, { useState } from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const activityOptions = [
  { type: 'Excavation', emissionFactor: 2.5 },
  { type: 'Transportation', emissionFactor: 1.8 },
  { type: 'Equipment Usage', emissionFactor: 3.2 },
  { type: 'Electricity Usage', emissionFactor: 0.7 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ActivityInput = () => {
  const [activities, setActivities] = useState([]);
  const [currentActivity, setCurrentActivity] = useState({
    activityType: '',
    quantity: '',
    emissionFactor: '',
  });
  const [totalEmissions, setTotalEmissions] = useState(0);

  const handleActivityTypeChange = (e) => {
    const selectedActivity = activityOptions.find(
      (activity) => activity.type === e.target.value
    );
    setCurrentActivity({
      ...currentActivity,
      activityType: selectedActivity.type,
      emissionFactor: selectedActivity.emissionFactor,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentActivity({
      ...currentActivity,
      [name]: value,
    });
  };

  const addActivity = () => {
    if (
      currentActivity.activityType &&
      currentActivity.quantity &&
      currentActivity.emissionFactor
    ) {
      const newActivity = {
        ...currentActivity,
        emissions: currentActivity.quantity * currentActivity.emissionFactor,
      };

      setActivities([...activities, newActivity]);
      setTotalEmissions(totalEmissions + newActivity.emissions);
      setCurrentActivity({ activityType: '', quantity: '', emissionFactor: '' });
    }
  };

  const removeActivity = (index) => {
    const updatedActivities = [...activities];
    const removedActivity = updatedActivities.splice(index, 1)[0];
    setActivities(updatedActivities);
    setTotalEmissions(totalEmissions - removedActivity.emissions);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Activity Input Form</h2>
      <div style={styles.formGroup}>
        <label style={styles.label}>Activity Type:</label>
        <select
          name="activityType"
          value={currentActivity.activityType}
          onChange={handleActivityTypeChange}
          required
          style={styles.select}
        >
          <option value="">Select an activity type</option>
          {activityOptions.map((option, index) => (
            <option key={index} value={option.type}>
              {option.type}
            </option>
          ))}
        </select>
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={currentActivity.quantity}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Emission Factor (kg CO2e per unit):</label>
        <input
          type="number"
          name="emissionFactor"
          value={currentActivity.emissionFactor}
          onChange={handleChange}
          required
          readOnly
          style={styles.input}
        />
      </div>
      <button
        onClick={addActivity}
        disabled={!currentActivity.quantity}
        style={styles.button}
      >
        Add Activity
      </button>

      <h3 style={styles.subheading}>Activity List</h3>
      {activities.length > 0 ? (
        <ul style={styles.activityList}>
          {activities.map((activity, index) => (
            <li key={index} style={styles.activityItem}>
              {activity.activityType}: {activity.quantity} units, Emissions: {activity.emissions} kg CO2e
              <button onClick={() => removeActivity(index)} style={styles.removeButton}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No activities added yet.</p>
      )}

      <h3 style={styles.subheading}>Total Emissions</h3>
      <p style={styles.totalEmissions}>{totalEmissions} kg CO2e</p>

      <h3 style={styles.subheading}>Emissions Chart</h3>
      {activities.length > 0 && (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={activities}
              dataKey="emissions"
              nameKey="activityType"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {activities.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  subheading: {
    color: '#555',
    marginTop: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  select: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  activityList: {
    listStyleType: 'none',
    padding: '0',
  },
  activityItem: {
    backgroundColor: '#fff',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #ccc',
  },
  removeButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '5px 10px',
    cursor: 'pointer',
  },
  totalEmissions: {
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default ActivityInput;
