Expense Tracker

A MERN stack application to track daily expenses with authentication, filtering, and real-time balance updates.

Features

User login and signup with JWT

Add, edit, delete expenses

Filter by date, category, and amount

Real-time balance summary

Responsive UI with React and Tailwind CSS

REST API built with Node.js, Express, and MongoDB

Tech Stack

Frontend: React, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB

Tools: JWT, bcrypt, Git, VS Code

Setup
Backend
cd backend
npm install
npm start


Add a .env file with:

MONGO_URI=your_connection_string
JWT_SECRET=your_secret
PORT=5000

Frontend
cd frontend
npm install
npm start

Project Structure
backend/   → API, models, controllers
frontend/  → React UI

API

POST /api/auth/register

POST /api/auth/login

GET /api/expenses

POST /api/expenses

PUT /api/expenses/:id

DELETE /api/expenses/:id
