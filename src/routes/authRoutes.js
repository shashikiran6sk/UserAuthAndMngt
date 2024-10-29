// src/routes/authRoutes.js
const express = require('express');
const { register, login } = require('../controllers/authController');
const {
    registerUserSchema,
    loginUserSchema,
  } = require("../utils/userSchema");
  const validate = require("../middlewares/validate");
const router = express.Router();

router.post('/register',validate(registerUserSchema), register);
router.post('/login', validate(loginUserSchema),login);

module.exports = router;
