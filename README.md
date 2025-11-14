Next-GEM-CRM

A full-stack CRM application built with React (Vite) frontend and Node.js + Express + Prisma + PostgreSQL backend.

Features

User authentication (signup/login) with JWT.

Role-based access (Admin/User).

Lead management (CRUD operations).

Activity tracking.

PostgreSQL database with Prisma ORM.

Axios-based API communication with token handling.

Redux Toolkit for state management in frontend.

Folder Structure

Backend

backend/
├── src/
│   ├── config/
│   │   └── prismaClient.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── user.controller.js
│   ├── middleware/
│   │   └── protect.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── user.routes.js
│   ├── utils/
│   │   └── generateToken.js
│   ├── generated/
│   │   └── prisma/
│   ├── app.js
│   └── server.js
├── prisma/
│   ├── schema.prisma
│   └── prisma.config.ts
├── .env
├── package.json
└── package-lock.json


Frontend

frontend/
├── src/
│   ├── api/
│   │   └── api.js
│   ├── app/
│   │   └── store.js
│   ├── features/
│   │   ├── auth/authSlice.js
│   │   ├── leads/leadsSlice.js
│   │   └── activities/activitiesSlice.js
│   ├── pages/
│   └── main.jsx
├── .env
├── package.json
└── package-lock.json

Backend Setup

Install dependencies: npm install

Configure .env:

PORT=5000
DATABASE_URL="postgresql://postgres:Mahi@localhost:5432/nextgemdb?schema=public"
JWT_SECRET="your_jwt_secret_here"
CLIENT_URL=http://localhost:5173
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=yourpassword


Generate Prisma Client: npx prisma generate

Push schema to DB: npx prisma db push

Optional migration: npx prisma migrate dev --name init

Start backend: npm run dev (Runs on http://localhost:5000
)

Frontend Setup

Install dependencies: npm install

Configure .env:

VITE_API_URL=http://localhost:5000/api


Start frontend: npm run dev (Runs on http://localhost:5173
)

API Endpoints

Auth

Method	Endpoint	Description
POST	/api/auth/signup	Register new user
POST	/api/auth/login	Login existing user
GET	/api/auth/profile	Get user profile (protected)

Users

Method	Endpoint	Description
GET	/api/users	Get all users
GET	/api/users/:id	Get single user
Frontend Usage

Use api.js Axios instance for API calls instead of hardcoding URLs:

import api from "../api/api";
const response = await api.post("/auth/login", { email, password });


Redux Toolkit slices for state management (authSlice, leadsSlice, activitiesSlice).

Notes

Always run npx prisma generate after schema changes.

Ensure DATABASE_URL points to the correct database.

Use two terminals: one for backend (npm run dev), one for frontend (npm run dev).

.env file in frontend root is necessary for Vite variables.

Technologies Used

Frontend: React, Vite, Redux Toolkit, Axios

Backend: Node.js, Express, Prisma, PostgreSQL

Authentication: JWT

State Management: Redux Toolkit

ORM: Prisma
