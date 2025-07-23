import React from 'react';

const StepIndicator = () => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2d2d2d',
      padding: '20px',
    },
    step: {
      display: 'flex',
      alignItems: 'center',
      color: '#fff',
      padding: '10px 20px',
      fontFamily: 'Arial, sans-serif',
      position: 'relative',
      zIndex: 1,
    },
    stepActive: {
      backgroundColor: '#8BC34A',
      zIndex: 2,
    },
    stepInactive: {
      backgroundColor: '#CFCFCF',
      color: '#000',
    },
    stepContent: {
      padding: '0 15px',
      textAlign: 'center',
    },
    stepTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      margin: '0',
    },
    stepSubtitle: {
      fontSize: '12px',
      margin: '0',
    },
    triangleRight: {
      position: 'absolute',
      right: '-20px',
      width: '0',
      height: '0',
      borderTop: '20px solid transparent',
      borderBottom: '20px solid transparent',
      borderLeft: '20px solid #8BC34A', // Change this to the background color of the step
    },
    triangleLeft: {
      position: 'absolute',
      left: '-20px',
      width: '0',
      height: '0',
      borderTop: '20px solid transparent',
      borderBottom: '20px solid transparent',
      borderRight: '20px solid #CFCFCF', // Change this to the background color of the step
    },
  };

  return (
    <div style={styles.container}>
      <div style={{ ...styles.step, ...styles.stepActive }}>
        <div style={styles.stepContent}>
          <p style={styles.stepTitle}>Step 1</p>
          <p style={styles.stepSubtitle}>Personal Details</p>
        </div>
        <div style={styles.triangleRight}></div>
      </div>
      <div style={{ ...styles.step, ...styles.stepInactive }}>
        <div style={styles.triangleLeft}></div>
        <div style={styles.stepContent}>
          <p style={styles.stepTitle}>Step 2</p>
          <p style={styles.stepSubtitle}>Contact Information</p>
        </div>
        <div style={styles.triangleRight}></div>
      </div>
      <div style={{ ...styles.step, ...styles.stepInactive }}>
        <div style={styles.triangleLeft}></div>
        <div style={styles.stepContent}>
          <p style={styles.stepTitle}>Step 3</p>
          <p style={styles.stepSubtitle}>Organizational & Employment Details</p>
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;
