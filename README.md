# EMSTRAP - AI-Powered Emergency Response Platform

EMSTRAP is a corporate web platform and real-time emergency simulation dashboard. It serves as a unified digital ecosystem connecting citizens, hospitals, ambulance operators, police departments, and enterprises to coordinate responses when every second matters.

---

## 📂 Codebase Structure

This repository is split into:
- **Frontend** (React + TanStack Router + Vite + Tailwind CSS): The modern web platform, client pages, interactive components, and assets.
- **Backend** (Express + Node.js): The server that processes partner contact and career application submissions and dispatches automated notifications.

```
Emstrap/
├── src/                          # 🌐 React application source code
│   ├── assets/                   # Feature graphics and hero illustrations
│   ├── components/               # UI components, headers, footers, carousels
│   │   └── ui/                   # Reusable shadcn/ui component library
│   ├── data/                     # Structured page data and configuration
│   ├── hooks/                    # Custom React hooks (useInView, useMobile)
│   ├── layouts/                  # Root application layout
│   ├── lib/                      # Utilities and telemetry
│   ├── pages/                    # Core view components (Home, Corporate, Smart Cities, etc.)
│   └── routes/                   # TanStack file-based routes
├── public/                       # 🖼️ Static assets, branding, and images
│   └── images/                   # Solution banners, ecosystem steps, and cards
├── backend/                      # ⚙️ Express server code
│   ├── server.js                 # Primary server entrypoint
│   ├── .env                      # Settings file containing email provider credentials (SMTP)
│   ├── routes/                   # Contact and careers form routes
│   ├── controllers/              # Request handling and form processing
│   └── utils/                    # Mail delivery helpers (Nodemailer)
├── start.bat                     # 🚀 One-click local development launcher
├── vite.config.ts                # Vite configuration
└── package.json                  # Root dependencies & scripts
```

---

## 🛠️ How It Works & How to Run

### 1. Quick Start (Windows)
Double-click `start.bat` in the project root. It will automatically:
- Install backend dependencies if missing
- Install frontend dependencies if missing
- Launch the backend API server on port 5000
- Launch the Vite frontend dev server at `http://localhost:5173`

---

### 2. Manual Setup

#### Frontend (React + Vite)
```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

#### Backend (Node.js API)
```bash
cd backend
npm install
npm run dev
```

---

## 🚀 Deployment

- **Vercel**: The project is pre-configured with `vercel.json` for seamless client-side single page routing and automated deployments on push to `main`.