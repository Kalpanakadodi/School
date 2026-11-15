import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';
import { initialData } from '../data/initialData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.join(__dirname, '../data/database.json');

// Ensure data folder exists
const dataDir = path.dirname(DB_FILE);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// In-memory cache & synchronous disk-backed JSON database
let db = null;

function loadDatabase() {
  try {
    if (fs.existsSync(DB_FILE)) {
      const content = fs.readFileSync(DB_FILE, 'utf-8');
      db = JSON.parse(content);
      // Ensure all required collections exist
      if (!db.settings) db.settings = { ...initialData.settings };
      if (!Array.isArray(db.announcements)) db.announcements = [...initialData.announcements];
      if (!Array.isArray(db.gallery)) db.gallery = [...initialData.gallery];
      if (!Array.isArray(db.admissions)) db.admissions = [...initialData.admissions];
      if (!Array.isArray(db.contactMessages)) db.contactMessages = [...initialData.contactMessages];
      if (!db.admin) {
        db.admin = {
          username: "admin",
          passwordHash: bcrypt.hashSync("admin123", 10)
        };
      }
    } else {
      db = {
        settings: { ...initialData.settings },
        announcements: [...initialData.announcements],
        gallery: [...initialData.gallery],
        admissions: [...initialData.admissions],
        contactMessages: [...initialData.contactMessages],
        admin: {
          username: "admin",
          passwordHash: bcrypt.hashSync("admin123", 10)
        }
      };
      saveDatabase();
    }
  } catch (err) {
    console.error("Error reading database file, resetting to initial data:", err);
    db = {
      settings: { ...initialData.settings },
      announcements: [...initialData.announcements],
      gallery: [...initialData.gallery],
      admissions: [...initialData.admissions],
      contactMessages: [...initialData.contactMessages],
      admin: {
        username: "admin",
        passwordHash: bcrypt.hashSync("admin123", 10)
      }
    };
    saveDatabase();
  }
}

function saveDatabase() {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf-8');
  } catch (err) {
    console.error("Error saving database to file:", err);
  }
}

// Initialize on module load
loadDatabase();

export const Database = {
  // Settings
  getSettings() {
    return db.settings;
  },
  updateSettings(newSettings) {
    db.settings = { ...db.settings, ...newSettings };
    saveDatabase();
    return db.settings;
  },

  // Announcements
  getAnnouncements() {
    return [...db.announcements].sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
  },
  addAnnouncement(item) {
    const newItem = {
      id: "ann-" + Date.now(),
      title: item.title,
      content: item.content,
      category: item.category || 'General',
      isPinned: Boolean(item.isPinned),
      publishDate: item.publishDate || new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString()
    };
    db.announcements.unshift(newItem);
    saveDatabase();
    return newItem;
  },
  updateAnnouncement(id, updatedFields) {
    const idx = db.announcements.findIndex(a => a.id === id);
    if (idx === -1) return null;
    db.announcements[idx] = { ...db.announcements[idx], ...updatedFields };
    saveDatabase();
    return db.announcements[idx];
  },
  deleteAnnouncement(id) {
    const initialLen = db.announcements.length;
    db.announcements = db.announcements.filter(a => a.id !== id);
    saveDatabase();
    return db.announcements.length !== initialLen;
  },

  // Gallery
  getGallery() {
    return [...db.gallery].reverse();
  },
  addGallery(item) {
    const newItem = {
      id: "gal-" + Date.now(),
      title: item.title,
      category: item.category || 'School events',
      imageUrl: item.imageUrl,
      description: item.description || '',
      createdAt: new Date().toISOString()
    };
    db.gallery.push(newItem);
    saveDatabase();
    return newItem;
  },
  deleteGallery(id) {
    const initialLen = db.gallery.length;
    db.gallery = db.gallery.filter(g => g.id !== id);
    saveDatabase();
    return db.gallery.length !== initialLen;
  },

  // Admissions
  getAdmissions() {
    return [...db.admissions].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  },
  addAdmission(enquiry) {
    const newEnquiry = {
      id: "adm-" + Date.now(),
      parentName: enquiry.parentName,
      studentName: enquiry.studentName,
      applyingClass: enquiry.applyingClass,
      parentPhone: enquiry.parentPhone,
      email: enquiry.email || '',
      message: enquiry.message || '',
      status: 'new',
      createdAt: new Date().toISOString()
    };
    db.admissions.unshift(newEnquiry);
    saveDatabase();
    return newEnquiry;
  },
  updateAdmissionStatus(id, status) {
    const item = db.admissions.find(a => a.id === id);
    if (!item) return null;
    item.status = status;
    saveDatabase();
    return item;
  },
  deleteAdmission(id) {
    const initialLen = db.admissions.length;
    db.admissions = db.admissions.filter(a => a.id !== id);
    saveDatabase();
    return db.admissions.length !== initialLen;
  },

  // Contact Messages
  getContactMessages() {
    return [...db.contactMessages].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  },
  addContactMessage(msg) {
    const newMsg = {
      id: "msg-" + Date.now(),
      name: msg.name,
      email: msg.email,
      phone: msg.phone || '',
      subject: msg.subject || 'General Enquiry',
      message: msg.message,
      status: 'unread',
      createdAt: new Date().toISOString()
    };
    db.contactMessages.unshift(newMsg);
    saveDatabase();
    return newMsg;
  },
  updateContactStatus(id, status) {
    const item = db.contactMessages.find(m => m.id === id);
    if (!item) return null;
    item.status = status;
    saveDatabase();
    return item;
  },
  deleteContactMessage(id) {
    const initialLen = db.contactMessages.length;
    db.contactMessages = db.contactMessages.filter(m => m.id !== id);
    saveDatabase();
    return db.contactMessages.length !== initialLen;
  },

  // Admin Auth
  verifyAdmin(username, password) {
    if (!db.admin) return false;
    if (db.admin.username !== username) return false;
    return bcrypt.compareSync(password, db.admin.passwordHash);
  },
  updateAdminPassword(newPassword) {
    db.admin.passwordHash = bcrypt.hashSync(newPassword, 10);
    saveDatabase();
    return true;
  }
};
