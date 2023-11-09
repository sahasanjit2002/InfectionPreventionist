const mongoose = require('mongoose');

const hospitalAdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  hName: {
    type: String,
    required: true,
  },
  hId: {
    type: String,
    required: true,
    unique: true,
    }
},{
  timestamps: true
});

const HospitalAdmin = mongoose.model('HospitalAdmin', hospitalAdminSchema);

module.exports = { HospitalAdmin };