-- ========================================================
-- Database Schema for Augustine English Medium HPS & HS
-- Compatible with MySQL 8.x / 5.7 and SQLite
-- ========================================================

-- 1. School Information and Configuration Table
CREATE TABLE IF NOT EXISTS school_settings (
  id INT PRIMARY KEY AUTO_INCREMENT,
  setting_key VARCHAR(100) UNIQUE NOT NULL,
  setting_value TEXT,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 2. Announcements Table
CREATE TABLE IF NOT EXISTS announcements (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  category VARCHAR(50) DEFAULT 'General',
  is_pinned BOOLEAN DEFAULT FALSE,
  publish_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Gallery Table
CREATE TABLE IF NOT EXISTS gallery (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  image_url TEXT NOT NULL,
  description VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Admission Enquiries Table
CREATE TABLE IF NOT EXISTS admission_enquiries (
  id INT PRIMARY KEY AUTO_INCREMENT,
  parent_name VARCHAR(150) NOT NULL,
  student_name VARCHAR(150) NOT NULL,
  applying_class VARCHAR(50) NOT NULL,
  parent_phone VARCHAR(20) NOT NULL,
  email VARCHAR(150),
  message TEXT,
  status ENUM('new', 'contacted', 'admitted', 'rejected') DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Contact Inquiries Table
CREATE TABLE IF NOT EXISTS contact_messages (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(200),
  message TEXT NOT NULL,
  status ENUM('unread', 'read', 'replied') DEFAULT 'unread',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. Admin Users Table
CREATE TABLE IF NOT EXISTS admin_users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
