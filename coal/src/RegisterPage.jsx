import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: '50px auto',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  paragraph: {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#555',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

const RegisterPage = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>Register</h1>
    <p style={styles.paragraph}>Select your registration type:</p>
    <Link to="/OrganizationForm">
      <button
        style={styles.button}
        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        Register as Organization
      </button>
    </Link>
    <Link to="/GovernmentForm">
      <button
        style={styles.button}
        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        Register as Government
      </button>
    </Link>
  </div>
);

export default RegisterPage;
