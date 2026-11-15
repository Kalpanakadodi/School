import express from 'express';
import { Database } from '../config/db.js';
import { requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public: Submit admission enquiry
router.post('/', (req, res) => {
  try {
    const { parentName, studentName, applyingClass, parentPhone, email, message } = req.body;

    // Validation
    const errors = {};
    if (!parentName || !parentName.trim()) {
      errors.parentName = 'Parent/Guardian name is required';
    }
    if (!studentName || !studentName.trim()) {
      errors.studentName = 'Student name is required';
    }
    if (!applyingClass || !applyingClass.trim()) {
      errors.applyingClass = 'Please select the class applying for';
    }
    if (!parentPhone || !parentPhone.trim()) {
      errors.parentPhone = 'Parent contact number is required';
    } else {
      const cleanPhone = parentPhone.replace(/[\s-]/g, '');
      if (cleanPhone.length < 10) {
        errors.parentPhone = 'Please provide a valid 10-digit contact number';
      }
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ success: false, errors, message: 'Please correct the form errors' });
    }

    const enquiry = Database.addAdmission({
      parentName: parentName.trim(),
      studentName: studentName.trim(),
      applyingClass: applyingClass.trim(),
      parentPhone: parentPhone.trim(),
      email: email ? email.trim() : '',
      message: message ? message.trim() : ''
    });

    return res.status(201).json({
      success: true,
      message: 'Admission enquiry submitted successfully. The school office will contact you soon.',
      data: enquiry
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Server error while submitting admission enquiry.' });
  }
});

// Admin: Get all admission enquiries
router.get('/', requireAdmin, (req, res) => {
  try {
    const list = Database.getAdmissions();
    res.json({ success: true, data: list });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to retrieve enquiries' });
  }
});

// Admin: Update enquiry status
router.patch('/:id/status', requireAdmin, (req, res) => {
  try {
    const { status } = req.body;
    if (!['new', 'contacted', 'admitted', 'rejected'].includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status' });
    }

    const updated = Database.updateAdmissionStatus(req.params.id, status);
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Enquiry record not found' });
    }

    res.json({ success: true, message: 'Status updated successfully', data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to update status' });
  }
});

// Admin: Delete enquiry
router.delete('/:id', requireAdmin, (req, res) => {
  try {
    const ok = Database.deleteAdmission(req.params.id);
    if (!ok) {
      return res.status(404).json({ success: false, message: 'Enquiry not found' });
    }
    res.json({ success: true, message: 'Enquiry deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to delete enquiry' });
  }
});

export default router;
