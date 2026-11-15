import express from 'express';
import { Database } from '../config/db.js';
import { requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public: Get school settings
router.get('/', (req, res) => {
  try {
    const settings = Database.getSettings();
    res.json({ success: true, data: settings });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve school settings' });
  }
});

// Admin: Update school settings
router.put('/', requireAdmin, (req, res) => {
  try {
    const updated = Database.updateSettings(req.body);
    res.json({ success: true, message: 'School settings updated successfully', data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to update settings' });
  }
});

export default router;
