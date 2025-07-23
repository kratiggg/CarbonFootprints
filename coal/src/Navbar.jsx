// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '10vh',
      backgroundColor: '#111',
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <Link to="/HomePage" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link to="/Aboutus" style={{ color: '#fff', textDecoration: 'none' }}>About Us</Link>
        <Link to="/src/pages/OrganizationForm" style={{ color: '#fff', textDecoration: 'none' }}>Registration</Link>
        <Link to="/dashboard" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</Link>
        <Link to="/regulations" style={{ color: '#fff', textDecoration: 'none' }}>Regulations</Link>
        <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</Link>
        <Link to="/src/main/Calculate" style={{ color: '#fff', textDecoration: 'none' }}>Signup</Link>
      </div>
    </div>
  );
}

export default Navbar;
