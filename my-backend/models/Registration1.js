const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  userID: String,
  employeeID: String,
  password: String,
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
