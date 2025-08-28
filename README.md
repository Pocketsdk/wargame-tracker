# Wargame Tracker

A comprehensive web application for tracking miniature wargame matches, including game logs, player profiles, army/faction tracking, and point value calculations.

## 🎯 Features

- **Game Logging**: Track individual games with players, armies, points, and results
- **Player Profiles**: Manage player information and statistics
- **Army Management**: Store and manage different army types and compositions
- **Game History**: View detailed game logs and statistics
- **Flexible Data**: Add new game systems, army types, and rules on the fly

## 🛠️ Technology Stack

- **Frontend**: React 18 with Tailwind CSS
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Package Manager**: npm

## 📁 Project Structure

```
wargame-tracker/
├── frontend/          # React application
│   ├── src/          # Source code
│   ├── public/       # Static assets
│   └── package.json  # Frontend dependencies
├── backend/          # Node.js server
│   ├── src/          # Server source code
│   ├── models/       # Database models
│   ├── routes/       # API routes
│   └── package.json  # Backend dependencies
├── docs/             # Documentation
└── README.md         # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd wargame-tracker
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**
   ```bash
   # In backend directory, create .env file
   cp .env.example .env
   # Edit .env with your MongoDB connection string
   ```

5. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```

6. **Start the frontend development server**
   ```bash
   cd frontend
   npm start
   ```

## 🔧 Development

- **Backend**: Runs on `http://localhost:5000`
- **Frontend**: Runs on `http://localhost:3000`
- **Database**: MongoDB connection configurable via environment variables

## 📝 License

[Add your license here]

## 🤝 Contributing

[Add contribution guidelines here]
