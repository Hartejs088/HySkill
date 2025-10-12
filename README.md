HySkill – MERN Skill Sharing Platform

HySkill is a MERN stack platform that connects users based on skills and projects. Users can register, showcase their skills, connect with like-minded individuals, chat in real-time, and initiate one-on-one video calls.

Features

User Authentication: Google OAuth login and JWT-based security

Profile Management: Skills, education, projects, and editable profiles

Matching System: Suggests users with similar skills

Chat System: Real-time messaging using Socket.io

Video Calls: One-on-one calls using ZegoCloud SDK

Tech Stack

Frontend: React.js, Bootstrap

Backend: Node.js, Express.js

Database: MongoDB Atlas

Real-time: Socket.io

Video Calls: ZegoCloud UIKit Prebuilt

Setup Instructions

Clone the repository:

git clone <repo-url>


Backend:

cd backend
npm install
# Create .env with MONGO_URI and JWT_SECRET
npm start


Frontend:

cd frontend
npm install
# Create .env with REACT_APP_BACKEND_URL
npm start


Open in browser: http://localhost:3000

Future Enhancements

Analytics dashboard for activity tracking

Mini-course posting and learning modules

AI-based skill matching suggestions
