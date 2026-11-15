import express from 'express';
import { Database } from '../config/db.js';
import { requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public: Get all announcements
router.get('/', (req, res) => {
  try {
    const list = Database.getAnnouncements();
    res.json({ success: true, data: list });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve announcements' });
  }
});

// Admin: Add announcement
router.post('/', requireAdmin, (req, res) => {
  try {
    const { title, content, category, isPinned, publishDate } = req.body;
    if (!title || !content) {
      return res.status(400).json({ success: false, message: 'Title and content are required' });
    }

    const newItem = Database.addAnnouncement({
      title,
      content,
      category: category || 'General',
      isPinned: Boolean(isPinned),
      publishDate: publishDate || new Date().toISOString().split('T')[0]
    });

    res.status(201).json({ success: true, message: 'Announcement created successfully', data: newItem });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to create announcement' });
  }
});

// Admin: Update announcement
router.put('/:id', requireAdmin, (req, res) => {
  try {
    const updated = Database.updateAnnouncement(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Announcement not found' });
    }
    res.json({ success: true, message: 'Announcement updated successfully', data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to update announcement' });
  }
});

// Admin: Delete announcement
router.delete('/:id', requireAdmin, (req, res) => {
  try {
    const ok = Database.deleteAnnouncement(req.params.id);
    if (!ok) {
      return res.status(404).json({ success: false, message: 'Announcement not found' });
    }
    res.json({ success: true, message: 'Announcement deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to delete announcement' });
  }
});

export default router;
