# Augustine English Medium HPS & HS – Official School Website

> **Official School Website and Administrative Management System**  
> **Location:** Hallikhed (B), Humanabad Taluk, Bidar District, Karnataka, India - 585414  
> **Affiliation:** Karnataka State Board  
> **Classes:** Nursery to 10th Standard (SSLC)  
> **Design Theme:** Minimal, Elegant White & Grey (`#FFFFFF`, `#F3F4F6`, `#333333`, `#E5E7EB`)

---

## 🌟 Institution Highlights & Features

- **Co-Educational English Medium Institution**: Comprehensive schooling from early childhood through high school graduation (Nursery, LKG, UKG, 1st to 7th Standard HPS, and 8th to 10th Standard HS).
- **Karnataka State Board Alignment**: Factually and clearly presented State Board syllabus with preparatory guidance for SSLC board examinations.
- **Official School Emblem**: Vector crest maintaining original heraldic symbols: Book of Wisdom, Torch of Knowledge, Laurel Wreath, and Motto (*"Wisdom • Excellence"*).
- **Clean White & Grey Aesthetic**:
  - Primary Background: `#FFFFFF` (White)
  - Secondary Background: `#F3F4F6` (Light Grey)
  - Primary Text: `#333333` (Dark Charcoal Grey)
  - Secondary Text: `#777777` (Muted Grey)
  - Action Buttons: `#333333` with subtle hover transitions
  - Borders: `#E5E7EB` (Subtle boundary lines)
- **Zero-Friction Startup**: Runs immediately out of the box with embedded persistent storage, plus complete MySQL schema and configuration.

---

## 📄 Public Website Pages (7 Core Pages)

1. **Home (`/`)**:
   - Official School Crest & Sticky Navigation Menu
   - Hero banner with campus atmosphere and accreditation badges
   - Welcome message & short institutional introduction
   - Core educational pillars (Vision, Mission, Values)
   - Highlights of school facilities in modern cards
   - Academics overview (Nursery to 10th Standard)
   - Latest school announcements & active circulars ticker
   - Photo gallery preview with instant lightbox viewer
   - Admissions call-to-action & contact overview
   - Professional institutional footer with quick links

2. **About Us (`/about`)**:
   - Introduction to the school in Hallikhed (B)
   - School history & community expansion records
   - Vision & Mission statements
   - Educational philosophy (Holistic development, foundational clarity, moral consciousness)
   - Principal's official message
   - School values & objectives
   - Clearly marked editable placeholders for unprovided administrative archives

3. **Academics (`/academics`)**:
   - Pre-Primary Wing (Nursery, LKG, UKG)
   - Primary Education (1st to 5th Standard)
   - Higher Primary School / HPS (6th & 7th Standard)
   - High School / HS (8th to 10th Standard - SSLC)
   - Teaching & learning methodology (Conceptual clarity, continuous evaluation, student mentorship)
   - Holistic student development (Languages, sports, moral ethics, cultural heritage)
   - Honest Karnataka State Board affiliation statement

4. **Facilities (`/facilities`)**:
   - Attractive verified image cards for all confirmed facilities:
     - Well-ventilated Classrooms
     - School Library & Reading Room
     - Science Laboratory with demonstration apparatus
     - Computer Education Lab
     - Sports and Open Playground
     - Clean Purified Drinking Water (RO Filtration)
     - Sanitation & Separate Washrooms for Boys, Girls & Staff
     - Administrative Office & Campus Safety

5. **Gallery (`/gallery`)**:
   - Photo categories:
     - *Classroom activities*
     - *Cultural celebrations*
     - *Annual day functions*
     - *Sports activities*
     - *Student activities*
     - *School events*
   - Interactive category filter buttons
   - Fullscreen Lightbox modal with keyboard navigation (Esc, Arrow keys)
   - Dynamic synchronization with admin media repository

6. **Admissions (`/admissions`)**:
   - Classes available for enrollment (Nursery to 10th Standard)
   - 4-step admission procedure
   - Required documents checklist (Birth Certificate, TC, Previous Marks Card, Aadhaar, Photos)
   - Interactive **Admission Enquiry Form**:
     - Parent/Guardian Name (Required)
     - Student Full Name (Required)
     - Applying Class (Required selector)
     - Parent Contact Number (Required with 10-digit validation)
     - Email Address (Optional format validation)
     - Message / Specific Queries
   - Real-time client & server validation with success confirmation modal

7. **Contact Us (`/contact`)**:
   - Official Campus Address: *Hallikhed (B), Humanabad Taluk, Bidar District, Karnataka, India - 585414*
   - Office contact numbers with editable placeholders
   - Official email address placeholder
   - Office working hours
   - Interactive Google Maps location embed centered on Hallikhed (B), Bidar
   - Directions section (connectivity from Humanabad and Bidar)
   - Contact enquiry form with status tracking

---

## 🛡️ Admin Dashboard (`/admin`)

Simple, secure, and user-friendly control panel tailored for non-technical school administrative staff:

- **Secure Login (`/admin/login`)**:
  - Token-based JWT authentication
  - Default credentials for testing:
    - **Username:** `admin`
    - **Password:** `admin123`
- **Dashboard Overview (`/admin`)**:
  - Live statistics: Total Enquiries, Contact Messages, Active Circulars, Gallery Photos
  - Quick action shortcuts and recent enquiry review table
- **Admission Enquiries Manager (`/admin/admissions`)**:
  - Real-time search by student, parent, or phone number
  - Filter by status: *New*, *Contacted*, *Admitted*, *Rejected*
  - Detailed modal view with direct telephone link
  - Delete enquiry with confirmation
- **Contact Messages Manager (`/admin/messages`)**:
  - View contact queries received from the public website
  - Mark status as *Unread*, *Read*, or *Replied*
  - Delete queries
- **Announcements Manager (`/admin/announcements`)**:
  - Post new announcements with category and publish date
  - Pin high-priority circulars to the top ticker
  - Edit or delete announcements
- **Photo Gallery Manager (`/admin/gallery`)**:
  - Upload photos via direct image URL or local image file upload
  - Assign categories, title, and description
  - Delete photos from gallery
- **School Info & Banner Settings (`/admin/settings`)**:
  - Edit school phone number, email, and campus address
  - Update Principal name and message
  - Update or toggle homepage top announcement banner

---

## 💻 Technology Stack

- **Frontend**: React 18, Vite, React Router 6, Tailwind CSS, Lucide React Icons.
- **Backend**: Node.js, Express, CORS, JSONWebToken, BcryptJS, Multer.
- **Database**:
  - **Embedded / Local**: Disk-backed persistent JSON database (`server/data/database.json`) guaranteeing instant zero-friction execution.
  - **Production MySQL**: Full SQL schema provided in `server/config/schema.sql` and connection adapter in `server/config/mysql.js`.
- **Image Handling**: Local upload storage (`server/uploads/`) with Cloudinary compatibility.

---

## 🚀 How to Run the Website

### Step 1: Start the Server (Serves API + Built Website)
From the project root directory:
```bash
npm start
```
The server will start at:
```
http://localhost:5000
```
Open your browser and navigate to `http://localhost:5000` to view the complete public school website and admin panel!

### Step 2: Accessing the Admin Panel
1. Click **Staff Login** in the top navigation bar or navigate to:
   ```
   http://localhost:5000/admin/login
   ```
2. Enter the credentials:
   - **Username:** `admin`
   - **Password:** `admin123`
3. Access all administrative modules to update notices, manage admission enquiries, upload gallery photos, and edit school contact details.

### Step 3: Frontend Development Mode (Optional)
If you wish to make live styling changes with Vite HMR:
```bash
npm --prefix client run dev
```
Vite will start on `http://localhost:3000` and automatically proxy API calls to port 5000.

---

## 🗄️ MySQL Database Setup (Optional Production Migration)

If deploying to a dedicated MySQL server:
1. Create a MySQL database:
   ```sql
   CREATE DATABASE augustine_school_db;
   ```
2. Import the schema:
   ```bash
   mysql -u root -p augustine_school_db < server/config/schema.sql
   ```
3. Set environment variables in `server/.env`:
   ```env
   DB_TYPE=mysql
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=augustine_school_db
   PORT=5000
   JWT_SECRET=your_secure_secret_key
   ```
