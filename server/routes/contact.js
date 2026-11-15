import express from 'express';
import { Database } from '../config/db.js';
import { requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public: Submit contact enquiry
router.post('/', (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Name is required' });
    }
    if (!email || !email.trim()) {
      return res.status(400).json({ success: false, message: 'Email address is required' });
    }
    if (!message || !message.trim()) {
      return res.status(400).json({ success: false, message: 'Message cannot be empty' });
    }

    const saved = Database.addContactMessage({
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : '',
      subject: subject ? subject.trim() : 'General Enquiry',
      message: message.trim()
    });

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received. Our administration will get in touch.',
      data: saved
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to submit contact message' });
  }
});

// Admin: Get all contact messages
router.get('/', requireAdmin, (req, res) => {
  try {
    const list = Database.getContactMessages();
    res.json({ success: true, data: list });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve messages' });
  }
});

// Admin: Update message status (unread/read/replied)
router.patch('/:id/status', requireAdmin, (req, res) => {
  try {
    const { status } = req.body;
    const updated = Database.updateContactStatus(req.params.id, status);
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Message not found' });
    }
    res.json({ success: true, message: 'Status updated', data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to update message status' });
  }
});

// Admin: Delete contact message
router.delete('/:id', requireAdmin, (req, res) => {
  try {
    const ok = Database.deleteContactMessage(req.params.id);
    if (!ok) {
      return res.status(404).json({ success: false, message: 'Message not found' });
    }
    res.json({ success: true, message: 'Message deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to delete message' });
  }
});

export default router;
