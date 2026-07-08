import { z } from 'zod';

export const loginSchema = z.object({
  identifier: z.string().min(1, 'Email or username is required'),
  password: z.string().min(1, 'Password is required'),
});

export const signupSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Please enter a valid email'),
  username: z.string().min(3, 'Username must be at least 3 characters'),
  birthdate: z.string().min(1, 'Birthdate is required'),
  password: z.string().min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: z.string().min(1, 'Please confirm your password'),
  chessUsername: z.string().min(1, 'Chess.com username is required'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});
