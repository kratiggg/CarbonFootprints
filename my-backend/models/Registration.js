const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  homeAddress: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
