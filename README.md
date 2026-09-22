# EMSTRAP - AI-Powered Emergency Response Platform

EMSTRAP is a corporate web platform and real-time emergency simulation dashboard. It serves as a unified digital ecosystem connecting citizens, hospitals, ambulance operators, police departments, and enterprises to coordinate responses when every second matters.

---

## 📂 Codebase Structure

This repository is split into two clean directories: **Frontend** (the website pages and files) and **Backend** (the server that processes forms and sends automated emails).

```
New folder/
├── frontend/                     # 🌐 All website pages, styles, images & PDFs
│   ├── index.html                # Main landing page & live interactive simulation dashboard
│   ├── about.html                # About page (Company profile, mission, vision, MSME certificate)
│   ├── research.html             # Field research, EMRI/police visits, case counts, and telemetry research
│   ├── patent.html               # Intellectual Property (IP) filing documents & publications
│   ├── prototype.html            # Functional prototype UI previews (analytics, live tracking, reports)
│   ├── pilots.html               # Live pilot test summaries and partnerships
│   ├── launch.html               # Market launch roadmap, target demographics, and expansion details
│   ├── service-details.html      # Dynamic subpage detailing Connect, Ride, Shield, & Command modules
│   ├── careers.html              # Careers page listing open positions
│   ├── style.css                 # Custom animations and stylesheet overrides
│   ├── logo.png                  # Company logo
│   ├── *.jpg / *.png             # Uploaded research photographs, screenshot graphics, and certificates
│   ├── *.mp4                     # Background hero video and demo video player clip
│   └── *.pdf                     # Official downloadable briefings, proposals, and brochures
│
├── backend/                      # ⚙️ Express server code
│   ├── server.js                 # Primary server entrypoint
│   ├── .env                      # Settings file containing email provider credentials (SMTP)
│   ├── routes/                   # URL paths configured for forms
│   │   ├── contact.js            # Router path for landing page "Become a Partner" contact form
│   │   └── careers.js            # Router path for careers form submissions
│   ├── controllers/              # Handles what to do when forms are sent
│   │   ├── contactController.js  # Validates fields and sends contact notifications
│   │   └── careersController.js  # Validates fields, parses resumes, and sends applications
│   └── utils/                    # Shared utility files
│       └── mail.js               # Core email engine (sends beautiful, styled HTML emails via Nodemailer)
│
└── README.md                     # 📖 This user manual
```

---

## 🛠️ How It Works & How to Run

### 1. The Website (Frontend)
The frontend consists of static HTML files paired with **Tailwind CSS** (styling framework) and **JavaScript** (animations and simulation logic).
- **To View the Website**: Simply open `frontend/index.html` in any standard web browser (Chrome, Edge, Safari, Firefox). No installation is required to view the pages.
- **Key Sections**:
  * **Landing Page (`index.html`)**: Has an interactive Live Emergency Dispatch Simulation. Click **Demo** to see the routing and dispatch flow.
  * **Learn More Buttons**: Clicking "Learn More" in the About section or the Services cards will seamlessly open the respective subpages (`about.html` or `service-details.html`).

### 2. The Server (Backend)
The backend is a Node.js server that listens to inputs submitted on the "Contact" and "Careers" forms, processes the files (like resumes), and sends automated emails to EMSTRAP administrators and applicants.

#### Setup and Run Instructions:
1. Make sure you have **Node.js** installed on your computer.
2. Open a terminal/command prompt inside the `backend` folder:
   ```bash
   cd backend
   ```
3. Install the required libraries:
   ```bash
   npm install
   ```
4. Setup your email variables inside `backend/.env`:
   ```env
   PORT=5000
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ADMIN_EMAIL=admin-receiver-email@gmail.com
   ```
5. Start the backend server:
   ```bash
   npm start
   ```
   *The server will run on `http://localhost:5000`.*