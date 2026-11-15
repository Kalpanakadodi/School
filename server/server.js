import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';
import settingsRoutes from './routes/settings.js';
import announcementsRoutes from './routes/announcements.js';
import galleryRoutes from './routes/gallery.js';
import admissionsRoutes from './routes/admissions.js';
import contactRoutes from './routes/contact.js';
import uploadRoutes from './routes/upload.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static uploads directory
const uploadsPath = path.join(__dirname, 'uploads');
app.use('/uploads', express.static(uploadsPath));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/announcements', announcementsRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/admissions', admissionsRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/upload', uploadRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    school: 'Augustine English Medium HPS & HS, Hallikhed (B)',
    timestamp: new Date().toISOString()
  });
});

// Serve frontend build if available
const clientDist = path.join(__dirname, '../client/dist');
app.use(express.static(clientDist));

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api') || req.path.startsWith('/uploads')) {
    return next();
  }
  res.sendFile(path.join(clientDist, 'index.html'), (err) => {
    if (err) {
      // In development, if dist is not built yet, return helpful JSON
      res.status(200).send(`
        <!DOCTYPE html>
        <html>
        <head><title>Augustine School API</title></head>
        <body style="font-family: sans-serif; padding: 40px; text-align: center; background: #F3F4F6; color: #333333;">
          <h1>Augustine English Medium HPS & HS API Server</h1>
          <p>The backend API is running on port ${PORT}.</p>
          <p>Please run the client via <code>npm --prefix client run dev</code> or build with <code>npm --prefix client run build</code>.</p>
        </body>
        </html>
      `);
    }
  });
});

app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`Augustine English Medium HPS & HS - Server running`);
  console.log(`API URL: http://localhost:${PORT}`);
  console.log(`Database: File-backed persistent storage (MySQL compatible)`);
  console.log(`Default Admin: admin / admin123`);
  console.log(`=======================================================`);
});
