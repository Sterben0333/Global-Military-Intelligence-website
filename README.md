# 🌐 Global Military Intelligence (GMI) 

![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green?style=for-the-badge&logo=nodedotjs)
![Express.js](https://img.shields.io/badge/Express.js-4.x-blue?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?style=for-the-badge&logo=javascript)
![Leaflet](https://img.shields.io/badge/Leaflet-v1.9.4-brightgreen?style=for-the-badge&logo=leaflet)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

An interactive open-source defense analysis platform providing military data, global conflict visualization, historical warfare archives, defense news aggregation, user watchlists, and administrative tools.

---

## 🌟 Features Overview

### 🌍 1. Interactive World Map & Nation Intelligence Profiles
- **Leaflet-Powered Geo-Visualization:** Dark-themed world map featuring 33+ nations with custom markers, power indices, and nuclear proliferation routing lines.
- **Detailed Nation Modals:** In-depth modal breakdowns for ground army, navy, air force, nuclear arsenals, defense budgets, active/reserve personnel, and main battle equipment inventories.
- **Instant Search & Quick Filter:** Real-time search bar with instant drop-down results across all tracked sovereign defense forces.

### 📊 2. Side-by-Side Military Capability Comparison Engine
- Dual-nation head-to-head comparison tool evaluating troop strength, armored combat vehicles, naval fleet size, air superiority assets, defense budgets, and nuclear status.
- Visual comparative indicators highlighting military metric advantages.

### ⚔️ 3. Live Global Conflicts Tracker
- **Real-Time Geo-Overlays:** Interactive conflict zone map displaying active wars, civil conflicts, insurgencies, and territorial disputes color-coded by intensity (High, Medium, Low).
- **Categorized Conflict Cards:** Detailed descriptions, key belligerents, historical background, and current combat status.

### 📡 4. Real-Time Military & Defense News Aggregator
- Live defense news feed compiled from verified defense sources.
- Filter articles by topic (**Defense**, **Conflicts**, **Military Tech**) or publish date, with search query filtering and direct original article access.

### 📜 5. Interactive World War History & Conquest Maps
- Historical analysis modules covering **World War I (1914–1918)** and **World War II (1939–1945)**.
- Interactive Conquest & Territorial Map displaying fronts, major offensive lines, battle locations, and alliance filter overlays (Central Powers vs. Entente / Axis vs. Allies).

### 👤 6. Authentication, User Profiles & Custom Watchlists
- User registration and login powered by **JSON Web Tokens (JWT)** and **bcryptjs**.
- Personalized User Watchlist Dashboard to pin and track nations of interest.
- User profile management and custom avatar initials.

### 🛡️ 7. Administrative Control Panel
- Role-based admin access (Admin vs. Standard User).
- Admin panel for platform management, user oversight, reports, and security configuration.

---

## 🛠️ Technology Stack

### **Frontend**
- **Structure & Layout:** Semantic HTML5, Custom Glassmorphic Dark-Theme CSS3 (`styles.css`).
- **Typography:** Google Fonts (*Rajdhani* & *Inter*).
- **Mapping:** [Leaflet.js](https://leafletjs.com/) v1.9.4 for interactive GIS overlays.
- **Logic:** Vanilla JavaScript (ES6+ modular structure with `app.js`, `data.js`, `auth.js`, `admin.js`).

### **Backend**
- **Runtime:** Node.js.
- **Framework:** Express.js (RESTful API & static site hosting).
- **Database ORM:** Mongoose v9.x.
- **Database:** MongoDB Atlas (Cloud Database).
- **Authentication:** JWT (`jsonwebtoken`) & password hashing (`bcryptjs`).
- **Configuration:** `dotenv`.

---

## 📁 Repository Structure

```
military-intel-website/
├── backend/
│   ├── database/
│   │   ├── connection.js       # MongoDB Atlas connection handler
│   │   ├── seed.js             # Initial Admin account seeder
│   │   └── models/             # Mongoose schemas (User, Watchlist, Report, etc.)
│   ├── middleware/
│   │   └── auth.js             # JWT verification & admin check middleware
│   ├── routes/
│   │   ├── admin.js            # Admin panel management endpoints
│   │   ├── auth.js             # Login, signup, user profile endpoints
│   │   ├── reports.js          # User issue & feature report endpoints
│   │   └── watchlist.js        # User nation watchlist CRUD endpoints
│   ├── .env                    # Local environment variables (Git-ignored)
│   ├── package.json            # Backend dependencies & script definitions
│   └── server.js               # Main Express app server & static asset directory route
├── frontend/
│   ├── index.html              # Single Page Application HTML root
│   ├── styles.css              # Main dark-themed military UI stylesheet
│   ├── app.js                  # Main application controller & map initializer
│   ├── data.js                 # Complete national military database & stats
│   ├── auth.js                 # Auth modal handlers & JWT storage logic
│   ├── admin.js                # Admin dashboard client logic
│   ├── favicon.png             # Site favicon
│   ├── logo.png                # Official GMI crest logo
│   └── *_details/              # Asset folders for individual country profiles
├── .env.example                # Template file for environment variable setup
├── .gitignore                  # Git ignore definitions
├── start-server.bat            # One-click Windows launch script
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [Git](https://git-scm.com/)
- A free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster connection URI

---

### Step 1: Clone the Repository
```bash
git clone https://github.com/vyomdhip/Global-Military-Intelligence-website.git
cd Global-Military-Intelligence-website
```

---

### Step 2: Configure Environment Variables
1. Navigate to the `backend/` directory (or keep `.env` inside `backend/` as loaded by `server.js`).
2. Create a `.env` file based on `.env.example`:

```bash
# In backend/.env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/gmi?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_here
ADMIN_USERNAME=admin
ADMIN_PASSWORD=YourSecureAdminPassword123!
ADMIN_EMAIL=admin@gmi.org
PORT=3000
```

---

### Step 3: Install Dependencies
```bash
cd backend
npm install
```

---

### Step 4: Run the Application

#### Option A: Quick Start on Windows
Double-click the `start-server.bat` file in the project root directory. It will launch the Node backend server and automatically open `http://localhost:3000` in your default browser.

#### Option B: Terminal Command
From the root or `backend` folder:
```bash
# Production mode
cd backend
npm start

# Development mode (auto-reload on node v18+)
cd backend
npm run dev
```

Open your browser and navigate to:
```
http://localhost:3000
```

---

## 📡 API Endpoints Overview

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/auth/register` | Create a new user account | ❌ No |
| **POST** | `/api/auth/login` | Authenticate user & receive JWT token | ❌ No |
| **GET** | `/api/auth/me` | Fetch current logged-in user details | 🔒 Bearer Token |
| **GET** | `/api/watchlist` | Get user's saved watchlist nations | 🔒 Bearer Token |
| **POST** | `/api/watchlist/toggle` | Add/Remove nation from user watchlist | 🔒 Bearer Token |
| **POST** | `/api/reports` | Submit user feedback or intelligence report | 🔒 Bearer Token |
| **GET** | `/api/admin/users` | List registered accounts (Admin only) | 🛡️ Admin Token |
| **GET** | `/api/admin/stats` | System statistics & database health | 🛡️ Admin Token |

---

## 📄 Data Sources & Disclaimer

- **Data Aggregation:** Defense statistics and equipment counts are aggregated from verified open-source intelligence databases including *GlobalFirepower (GFP)*, *IISS Military Balance*, *SIPRI Expenditure Database*, *Federation of American Scientists (FAS)*, and *ACLED*.
- **Disclaimer:** This platform is designed strictly for **educational, research, and open-source intelligence (OSINT) analytical purposes**. No active military operational telemetry, classified government archives, or restricted defense secrets are stored or queried.

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Developed for Defense & OSINT Enthusiasts Worldwide 🛡️
</p>
