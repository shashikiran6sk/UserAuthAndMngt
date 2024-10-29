// src/app.js
const express = require('express');

require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const cors=require('cors')

const app = express();



app.use(express.json());
app.use(cors());


app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Global error handler
app.use((err, req, res, next) => {
    if (err instanceof ZodError) {
      return res.status(400).json({
        message: "Validation error",
        errors: err.errors.map((error) => ({
          path: error.path.join("."),
          message: error.message,
        })),
      });
    }
  
    res.status(500).json({ message: "Internal Server Error" });
  });

module.exports = app;
