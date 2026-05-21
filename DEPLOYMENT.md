# Deployment Guide

## Neon (Database)

1. Your Neon database is already configured in `.env` with `DATABASE_URL`
2. For Render backend, set these environment variables:
   - `DATABASE_URL`: `postgresql://neondb_owner:npg_7uMfwvWdVcA3@ep-flat-scene-ap7uue6g-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require`
   - `NODE_ENV`: `production`

## Render (Backend)

1. Connect your GitHub repo to Render
2. Create a new Web Service
3. Set these environment variables:
   ```
   NODE_ENV=production
   DATABASE_URL=<your-neon-connection-string>
   PORT=3000
   ```
4. Build command: `npm install`
5. Start command: `npm start`
6. After deployment, copy your Render URL (e.g., `https://your-app.onrender.com`)

## Vercel (Frontend)

1. Connect your GitHub repo to Vercel
2. Select the `Frontend` folder as the root directory
3. Set environment variable:
   ```
   VITE_API_URL=https://your-app.onrender.com
   ```
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy!

## Steps to Deploy

### Step 1: Prepare Backend for Render
- Update `.env` (in Render dashboard) with Neon DATABASE_URL
- Push code to GitHub

### Step 2: Deploy Backend to Render
- Go to https://dashboard.render.com
- Create new Web Service
- Connect to your GitHub repo
- Select `backend` folder
- Set environment variables
- Deploy

### Step 3: Deploy Frontend to Vercel
- Go to https://vercel.com
- Import your GitHub repo
- Select `Frontend` folder
- Add `VITE_API_URL` environment variable with your Render URL
- Deploy

## Local Development

```bash
# Backend
cd backend
npm install
npm run dev

# Frontend (in another terminal)
cd Frontend
npm install
npm run dev
```

The frontend will use `http://localhost:3000` for API calls locally.
In production, it will use the `VITE_API_URL` environment variable.
