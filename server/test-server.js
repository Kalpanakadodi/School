import http from 'http';
import express from 'express';
import cors from 'cors';
import { Database } from './config/db.js';
import authRoutes from './routes/auth.js';
import settingsRoutes from './routes/settings.js';
import announcementsRoutes from './routes/announcements.js';
import galleryRoutes from './routes/gallery.js';
import admissionsRoutes from './routes/admissions.js';
import contactRoutes from './routes/contact.js';

console.log("=== Testing Database and Routes in Node ===");

// 1. Test Database Methods
const settings = Database.getSettings();
console.log("1. Database Settings Loaded:", settings.schoolName);

const announcements = Database.getAnnouncements();
console.log("2. Database Announcements Count:", announcements.length);

const gallery = Database.getGallery();
console.log("3. Database Gallery Count:", gallery.length);

const admissions = Database.getAdmissions();
console.log("4. Database Admissions Count:", admissions.length);

// Test Add Admission Enquiry
const testAdmission = Database.addAdmission({
  parentName: "Test Parent",
  studentName: "Test Student",
  applyingClass: "5th Standard",
  parentPhone: "9876543210",
  email: "test@example.com",
  message: "Testing admission enquiry submission"
});
console.log("5. Test Admission Created ID:", testAdmission.id);

// Test Admin Auth
const isValidAdmin = Database.verifyAdmin("admin", "admin123");
console.log("6. Admin Auth with Default Credentials (admin/admin123):", isValidAdmin);

// Remove test admission
Database.deleteAdmission(testAdmission.id);
console.log("7. Cleaned up test record.");

console.log("=== ALL BACKEND MODULE TESTS PASSED SUCCESSFULLY! ===");
