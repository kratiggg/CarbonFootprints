// models/RegistrationForm1.js

const mongoose = require('mongoose');

const form2Schema = new mongoose.Schema({
  primaryPhone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  alternatePhone: String,
  organizationalEmail: String,
});

module.exports = mongoose.model('RegistrationForm1', form2Schema);
