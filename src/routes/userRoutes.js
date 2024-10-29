// src/routes/userRoutes.js
const express = require('express');
const { getProfile, updateProfile } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const {
    updateUserProfileSchema,
  } = require("../utils/userSchema");
  const validate = require("../middlewares/validate");
const router = express.Router();

router.get('/me', authMiddleware , getProfile);
router.put('/me', authMiddleware,validate(updateUserProfileSchema), updateProfile);

module.exports = router;
