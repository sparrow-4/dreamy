import express from 'express';
import session from 'express-session';
import passport from 'passport';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './src/routes/authRoutes.js';
import configurePassport from './src/passportConfig.js';
import { PrismaClient } from '@prisma/client';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';

dotenv.config();

const app = express();
export const prisma = new PrismaClient();

// Configure CORS for frontend Vite dev server
app.use(cors({
  origin: process.env.FRONTEND_URL || 'https://dreamy-olive.vercel.app',
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session Setup
app.use(session({
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 // 1 day
  },
  secret: process.env.SESSION_SECRET || 'super-dreamy-secret-key',
  resave: true,
  saveUninitialized: true,
  store: new PrismaSessionStore(
    prisma,
    {
      checkPeriod: 2 * 60 * 1000,  // ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
      modelName: 'Session',
    }
  )
}));

// Passport Setup
configurePassport(passport, prisma);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send(`Dreamy SFX Backend is Live (v1.0.2 - PG). DB Instance: ${process.env.DATABASE_URL ? 'Configured' : 'Missing'}`);
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'up', 
    version: '1.0.2', 
    database: process.env.DATABASE_URL ? 'detected' : 'missing',
    node_env: process.env.NODE_ENV 
  });
});

// Database seeding for Admin (Dev Helper)
app.get('/api/seed', async (req, res) => {
  try {
    const bcrypt = await import('bcrypt');
    const hashedPassword = await bcrypt.hash('admin123', 10);

    // Create admin if not exists
    const admin = await prisma.user.upsert({
      where: { email: 'admin@gmail.com' },
      update: {},
      create: {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: hashedPassword,
        role: 'ADMIN'
      }
    });
    res.json({ message: 'Seed complete', admin });
  } catch (err) {
    console.error('Seed error:', err);
    res.status(500).json({ error: err.message, stack: err.stack });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Using Database: ${process.env.DATABASE_URL ? 'Environment URL' : 'Fallback'}`);
});
