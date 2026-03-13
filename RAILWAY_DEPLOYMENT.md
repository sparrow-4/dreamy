# Railway Deployment Guide for Dreamy SFX

Deploying **Dreamy SFX** on Railway is straightforward since Railway natively supports monorepos and automatic builds. Follow these steps to get your app live!

## 1. Setup Railway Project
1. Log in to your [Railway Account](https://railway.app/).
2. Click **New Project** -> **Deploy from GitHub repo**.
3. Select your repository `sparrow-4/dreamy`.

## 2. Deploy the Database (PostgreSQL)
While SQLite is excellent for local development, production environments on Railway should use PostgreSQL.

1. In your Railway project, click **New** -> **Database** -> **Add PostgreSQL**.
2. Railway will provision the database instantly.
3. Open your codebase and update `backend/prisma/schema.prisma` to use PostgreSQL instead of SQLite:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```
   *(Commit and push this change to GitHub before the next steps!)*

## 3. Deploy the Backend App
1. Right-click the workspace in Railway -> **New** -> **GitHub Repo** -> `sparrow-4/dreamy`.
2. Click on this new service to open its settings.
3. Go to **Settings** > **General** > **Root Directory**. Type `/backend` and hit enter.
4. Railway will automatically detect Node.js.
5. Go to **Variables**, and map your PostgreSQL database:
   - Add a new variable `DATABASE_URL` and set its value to `$ { {Postgres.DATABASE_URL} }` (Use Reference from Railway).
   - Add `SESSION_SECRET` and set it to a strong random string (e.g., `super-secure-session-key`).
   - Add `FRONTEND_URL` and set it to the URL of your frontend service once you deploy it (e.g., `https://dreamy-frontend.up.railway.app`).
6. Railway will now install packages, run `npx prisma generate`, and start the app using `node server.js`.

## 4. Deploy the Frontend App
1. Again, right-click the workspace in Railway -> **New** -> **GitHub Repo** -> `sparrow-4/dreamy`.
2. Open its settings.
3. Go to **Settings** > **General** > **Root Directory**. Type `/frontend` and hit enter.
4. Railway will automatically detect Vite and run the build command.
5. Go to **Variables** on the frontend service.
   - Add `VITE_API_URL` and set it to your Backend's public URL (e.g., `https://dreamy-backend.up.railway.app`).
6. Go back to **Settings** and click **Generate Domain** under Networking to get your public site URL.

## 5. Finalizing
- Update the backend's `FRONTEND_URL` environment variable with your frontend's newly generated domain (this ensures CORS successfully allows frontend connections).
- Restart both services if needed.
- Open your frontend domain, and **Dreamy SFX is live!**
