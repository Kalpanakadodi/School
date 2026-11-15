import express from 'express';
import { Database } from '../config/db.js';
import { generateToken, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Admin Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username and password are required' });
  }

  const isValid = Database.verifyAdmin(username.trim(), password);
  if (!isValid) {
    return res.status(401).json({ success: false, message: 'Invalid credentials. Please verify your admin username and password.' });
  }

  const token = generateToken({ username, role: 'admin' });
  return res.json({
    success: true,
    message: 'Admin login successful',
    token,
    user: { username, role: 'admin' }
  });
});

// Verify token
router.get('/verify', requireAdmin, (req, res) => {
  res.json({ success: true, user: req.user });
});

export default router;
