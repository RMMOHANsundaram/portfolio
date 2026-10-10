# Mohan R — MERN Stack Developer Portfolio

A full-stack **MERN** (MongoDB, Express.js, React.js / JSX, Node.js) portfolio web application for **Mohan R**, Full Stack Developer and CSE Student at National Engineering College, Kovilpatti.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, JSX, Vite, Vanilla CSS Design System, Context API (Dark/Light Theme)
- **Backend**: Node.js, Express.js, CORS, Dotenv, REST API architecture
- **Database**: MongoDB with Mongoose (with in-memory local fallback for instant zero-dependency testing)

---

## 📁 Project Structure

```text
mohan-portfolio/
├── package.json                  # Root orchestrator with scripts
├── .env.example                  # Environment variables template
├── .gitignore                    # Git ignore file for Node & React
├── vercel.json                   # Vercel deployment configuration
├── netlify.toml                  # Netlify build configuration
│
├── client/                       # React (JSX) Frontend (Vite)
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   ├── public/
│   │   ├── favicon.svg
│   │   └── site.webmanifest
│   └── src/
│       ├── main.jsx              # React DOM entry point
│       ├── App.jsx               # Root Component & Layout
│       ├── index.css             # Modern Theme & CSS Design System
│       ├── context/
│       │   └── ThemeContext.jsx  # Dark/Light mode theme state
│       ├── services/
│       │   └── api.js            # Frontend API client
│       ├── data/
│       │   └── portfolioData.js  # Verified portfolio dataset
│       └── components/
│           ├── Navbar.jsx        # Glassmorphic header & drawer
│           ├── Hero.jsx          # Typewriter & Code Terminal Card
│           ├── Stats.jsx         # Metrics counter grid
│           ├── About.jsx         # Bio & Engineering Pillars
│           ├── Skills.jsx        # Filterable skills grid
│           ├── Projects.jsx      # Spotlight (SIH 2026) & Project cards
│           ├── Journey.jsx       # Interactive education timeline
│           ├── Certifications.jsx# Credentials & badges
│           ├── Contact.jsx       # Dynamic form & direct copy cards
│           ├── Toast.jsx         # Notification alert popup
│           ├── BackToTop.jsx     # Floating scroll-to-top button
│           └── Footer.jsx        # Footer component
│
└── server/                       # Node.js + Express Backend
    ├── package.json
    ├── server.js                 # Express server & API endpoints
    ├── config/
    │   └── db.js                 # Mongoose DB connector with fallback
    ├── models/
    │   ├── Message.js            # Contact message schema
    │   └── Project.js            # Dynamic project schema
    ├── routes/
    │   └── apiRoutes.js          # /api/health, /api/projects, /api/contact
    └── data/
        └── portfolioSeed.js      # Default data and initial seed
```

---

## 🚀 Quick Start (Run Locally)

### 1. Install Dependencies
In the root directory, run:
```bash
npm run install:all
```
*(Or install separately: `npm install`, `cd client && npm install`, `cd server && npm install`)*

### 2. Configure Environment (Optional)
Copy `.env.example` to `.env` in the root:
```bash
cp .env.example .env
```
*(If you don't have MongoDB installed locally, the backend will automatically use its in-memory fallback mode so everything runs seamlessly!)*

### 3. Start Development Server
Run both Frontend & Backend concurrently with a single command:
```bash
npm run dev
```

- **React Frontend**: [http://localhost:5173](http://localhost:5173)
- **Express Backend API**: [http://localhost:5000/api/health](http://localhost:5000/api/health)

---

## 🌐 Deployment Guide

### Deploy to Vercel (Frontend & Fullstack)
1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import your repo.
3. Set the **Root Directory** to `client` (or use the root with the included [`vercel.json`](file:///c:/aanec/portfolio/mohan-portfolio/vercel.json)).
4. Build Command: `npm run build`, Output Directory: `dist`.
5. Click **Deploy**.

### Deploy to Netlify (Frontend)
1. Connect your repository on [app.netlify.com](https://app.netlify.com).
2. The included [`netlify.toml`](file:///c:/aanec/portfolio/mohan-portfolio/netlify.toml) will automatically configure:
   - Base Directory: `client`
   - Build Command: `npm run build`
   - Publish Directory: `client/dist`

### Deploy Backend to Render / Railway
1. Create a new **Web Service** on [render.com](https://render.com) or [railway.app](https://railway.app).
2. Set Root Directory: `server`.
3. Build Command: `npm install`.
4. Start Command: `npm start`.
5. Add Environment Variable `MONGODB_URI` pointing to your free MongoDB Atlas database cluster.
