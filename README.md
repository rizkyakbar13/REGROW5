# REGROW5

A simple eco-brand storefront for ReGrow5, built with React + Vite on the frontend and Express on the backend.

## Project structure

```text
REGROW5/
├── backend/
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── .env.example
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── config/
│   │   │   └── site.js
│   │   ├── data/
│   │   │   └── products.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── package.json
│   └── vite.config.js
├── PRD_REGROW5.md
├── README.md
└── .gitignore
```

## WhatsApp configuration

The WhatsApp link should be stored in a single configuration file so it is easy to update later.

Frontend config:
- File: `frontend/src/config/site.js`
- Environment variable: `VITE_WHATSAPP_URL`
- Example file: `frontend/.env.example`

Backend config:
- File: `backend/.env.example`
- Environment variable: `WHATSAPP_LINK`

This keeps the business contact in one place and avoids repeating the same URL in many components.

## Run locally

Frontend:
```bash
cd frontend
npm install
npm run dev -- --host 0.0.0.0
```

Backend:
```bash
cd backend
npm install
node server.js
```
