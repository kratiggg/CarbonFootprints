// dummyData.js
const mongoose = require('mongoose');
const Registration = require('./models/Registration1'); // Ensure path to your Registration model is correct

mongoose.connect('mongodb://localhost:27017/registration-db', { useNewUrlParser: true, useUnifiedTopology: true });

const createDummyData = async () => {
  try {
    // Create dummy registration data
    const params = [
      { userID: 'user1', password: 'password123', confirmPassword: 'password123' },
      { userID: 'user2', password: 'password456', confirmPassword: 'password456' },
      { userID: 'user3', password: 'password789', confirmPassword: 'password789' }
    ];
    const queryString = new URLSearchParams(params).toString();

    // Insert dummy data into the database
    await Registration.insertMany(params);
    console.log('Dummy data inserted successfully');
  } catch (error) {
    console.error('Error inserting dummy data:', error);
  } finally {
    mongoose.connection.close();
  }
};

createDummyData();
