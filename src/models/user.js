// src/models/user.js
const mongoose = require('mongoose');
const db = require('../db/db');

const ServiceSchema = new mongoose.Schema({
  serviceId: { type: String, required: true },
  serviceName: { type: String, required: true },
  price: { type: Number, required: true },
});

const BusinessDetailsSchema = new mongoose.Schema({
  businessName: { type: String },
  address: { type: String },
  contactNumber: { type: String },
  services: [ServiceSchema],
});

const PreferencesSchema = new mongoose.Schema({
  emailNotifications: { type: Boolean, default: false },
  smsNotifications: { type: Boolean, default: false },
});

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['customer', 'business'], required: true },
  businessDetails: BusinessDetailsSchema,
  preferences: PreferencesSchema,
}, { timestamps: true });

console.log("Schema created")

module.exports = mongoose.model('User', UserSchema);
