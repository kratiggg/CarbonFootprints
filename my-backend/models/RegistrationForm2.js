// models/RegistrationForm2.js

const  mongoose = require('mongoose');

const form3Schema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
  },
  jobTitle: {
    Miner: {
      type: Boolean,
      default: false,
    },
    'Safety Officer': {
      type: Boolean,
      default: false,
    },
    Engineer: {
      type: Boolean,
      default: false,
    },
    Manager: {
      type: Boolean,
      default: false,
    },
  },
  workLocation: {
    type: String,
    required: true,
  },
  department: {
    'Mining Operations': {
      type: Boolean,
      default: false,
    },
    'Safety & Compliance': {
      type: Boolean,
      default: false,
    },
    'Environmental Management': {
      type: Boolean,
      default: false,
    },
    'Human Resource': {
      type: Boolean,
      default: false,
    },
    'Quality Control': {
      type: Boolean,
      default: false,
    },
    Other: {
      type: Boolean,
      default: false,
    },
  },
  employmentType: {
    'Full-Time': {
      type: Boolean,
      default: false,
    },
    'Part-Time': {
      type: Boolean,
      default: false,
    },
    Contract: {
      type: Boolean,
      default: false,
    },
    Temporary: {
      type: Boolean,
      default: false,
    },
},
});

module.exports = mongoose.model('RegistrationForm2', form3Schema);
