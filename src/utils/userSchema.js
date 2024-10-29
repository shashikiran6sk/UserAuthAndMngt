// src/utils/userSchema.js
const { z } = require('zod');

// Schema for user registration (either customer or business)
const registerUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["customer", "business"]),
  businessDetails: z
    .object({
      businessName: z.string().min(1),
      address: z.string().min(1),
      contactNumber: z.string().min(10),
      services: z.array(
        z.object({
          serviceId: z.string().min(1),
          serviceName: z.string().min(1),
          price: z.number().nonnegative("Price must be a non-negative number"),
        })
      ),
    })
    .optional(),
  preferences: z.object({
    emailNotifications: z.boolean(),
    smsNotifications: z.boolean(),
  }),
});

// Schema for user login
const loginUserSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password is required"),
});

// Schema for updating user profile
const updateUserProfileSchema = z.object({
  name: z.string().optional(),
  businessDetails: z
    .object({
      businessName: z.string().min(1),
      address: z.string().min(1),
      contactNumber: z.string().min(1),
      services: z.array(
        z.object({
          serviceId: z.string().min(1),
          serviceName: z.string().min(1),
          price: z.number().nonnegative("Price must be a non-negative number"),
        })
      ),
    })
    .optional(),
  preferences: z
    .object({
      emailNotifications: z.boolean(),
      smsNotifications: z.boolean(),
    })
    .optional(),
});

module.exports = {
  registerUserSchema,
  loginUserSchema,
  updateUserProfileSchema,
};
