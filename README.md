# Expense Tracker

A MERN stack application to track daily expenses with authentication, filtering, and real-time balance updates.

## Features
- User login and signup with JWT
- Add, edit, and delete expenses
- Filter expenses by date, category, and amount
- Real-time balance summary
- Responsive UI built with React and Tailwind CSS
- REST API developed using Node.js, Express, and MongoDB

## Tech Stack
- Frontend: React, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Tools: JWT, bcrypt, Git, VS Code

## Setup

### Backend
cd backend
npm install
npm start

bash
Copy code

Create a `.env` file inside the backend folder:
MONGO_URI=your_connection_string
JWT_SECRET=your_secret_key
PORT=5000

shell
Copy code

### Frontend
cd frontend
npm install
npm start

shell
Copy code

## Project Structure
backend/ → API, models, controllers
frontend/ → React UI

bash
Copy code

## API Endpoints
- POST /api/auth/register
- POST /api/auth/login
- GET /api/expenses
- POST /api/expenses
- PUT /api/expenses/:id
- DELETE /api/expenses/:id
