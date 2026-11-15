import express from 'express';
import { Database } from '../config/db.js';
import { requireAdmin } from '../middleware/auth.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

// Public: Get all gallery photos
router.get('/', (req, res) => {
  try {
    const list = Database.getGallery();
    res.json({ success: true, data: list });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve gallery photos' });
  }
});

// Admin: Add photo (JSON or multipart upload)
router.post('/', requireAdmin, upload.single('image'), (req, res) => {
  try {
    const { title, category, description, imageUrl: bodyImageUrl } = req.body;

    let finalImageUrl = bodyImageUrl;
    if (req.file) {
      finalImageUrl = `/uploads/${req.file.filename}`;
    }

    if (!finalImageUrl) {
      return res.status(400).json({ success: false, message: 'Image file or image URL is required' });
    }

    if (!title) {
      return res.status(400).json({ success: false, message: 'Title is required' });
    }

    const newItem = Database.addGallery({
      title,
      category: category || 'School events',
      imageUrl: finalImageUrl,
      description: description || ''
    });

    res.status(201).json({ success: true, message: 'Photo added to gallery', data: newItem });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message || 'Failed to add gallery photo' });
  }
});

// Admin: Delete photo
router.delete('/:id', requireAdmin, (req, res) => {
  try {
    const ok = Database.deleteGallery(req.params.id);
    if (!ok) {
      return res.status(404).json({ success: false, message: 'Photo not found' });
    }
    res.json({ success: true, message: 'Photo removed from gallery' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to delete photo' });
  }
});

export default router;
