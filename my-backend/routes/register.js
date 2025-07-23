const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// POST request for registration
router.post('/', async (req, res) => {
  try {
    const { formType, ...registrationData } = req.body;

    // Validate formType if necessary
    if (formType !== 'form1') {
      return res.status(400).json({ message: 'Invalid form type' });
    }

    // Create a new registration entry
    const registration = new Registration(registrationData);
    await registration.save();

    res.status(201).json({ message: 'Registration successful!' });
  } catch (error) {
    console.error('Error in registration:', error);
    res.status(500).json({ message: 'Registration failed. Please try again.' });
  }
});

module.exports = router;
