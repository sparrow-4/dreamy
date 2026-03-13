# Deployment Guide: Vercel (Frontend) & Render (Backend)

Welcome to the **Dreamy SFX** deployment guide! We will deploy the React Frontend to **Vercel** and the Node.js/Express Backend + Database to **Render**.

---

## Part 1: Backend Deployment on Render

### Step 1: Deploy a PostgreSQL Database
SQLite works locally, but Render requires a dedicated PostgreSQL database for data persistence.
1. Log in to [Render](https://render.com/).
2. Click **New** -> **PostgreSQL**.
3. Name it `dreamy-db` and click **Create Database**.
4. Once created, copy the **Internal Database URL** (or External if you prefer).

### Step 2: Update the Codebase
*Before* deploying the web service, you must alter Prisma to build for PostgreSQL:
1. Open `backend/prisma/schema.prisma` locally and change the `provider`:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```
2. Commit and push this change to your GitHub repo.

### Step 3: Deploy the Node.js Web Service
1. On Render, click **New** -> **Web Service**.
2. Connect your GitHub repository `sparrow-4/dreamy`.
3. Configure the service:
   - **Name**: `dreamy-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npx prisma generate && npx prisma db push`
   - **Start Command**: `node server.js`
4. Add Environment Variables (click **Advanced**):
   - `DATABASE_URL`: Paste the PostgreSQL URL you copied from Step 1.
   - `SESSION_SECRET`: Any random secure string (e.g., `super-secret-key-123`).
   - `FRONTEND_URL`: Leave blank for now; we'll update this once Vercel gives us a URL.
5. Click **Create Web Service**. Wait for it to become `Live` and copy the backend URL (e.g., `https://dreamy-backend.onrender.com`).

---

## Part 2: Frontend Deployment on Vercel

### Step 1: Deploy to Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **Add New** -> **Project**.
3. Import your `sparrow-4/dreamy` GitHub repository.
4. Open the **Framework Preset** configuration. Vercel usually auto-detects `Vite`.
5. Under **Root Directory**, enter `frontend`.
6. Open **Environment Variables**:
   - Add `VITE_API_URL` and set the value to your Render backend URL (e.g., `https://dreamy-backend.onrender.com`).
7. Click **Deploy**. Vercel will build the frontend. Note: I've already included `vercel.json` locally which prevents React Router 404 errors!

---

## Part 3: Final Integration

1. Once Vercel finishes, copy your new **Vercel domain URL** (e.g., `https://dreamy.vercel.app`).
2. Go back to your **Render Backend Dashboard**.
3. Open the **Environment** tab.
4. Add/Update the variable `FRONTEND_URL` and paste your Vercel URL. This ensures Cross-Origin Resource Sharing (CORS) functions successfully.
5. Render will automatically restart the backend service.

You're done! **Dreamy SFX is now live.**
