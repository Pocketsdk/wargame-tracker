# Wargame Tracker Backend

Backend API server for the Wargame Tracker application.

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Environment configuration**
   ```bash
   cp env.example .env
   # Edit .env with your MongoDB connection string
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

## API Endpoints

- `GET /` - Health check
- `GET /api/games` - Get all games
- `POST /api/games` - Create new game
- `GET /api/players` - Get all players
- `POST /api/players` - Create new player
- `GET /api/armies` - Get all armies
- `POST /api/armies` - Create new army

## Database Models

- **Game**: Game records with players, armies, scores, and results
- **Player**: Player profiles and statistics
- **Army**: Army compositions and point values

## Development

- Server runs on port 5000 by default
- Uses MongoDB for data storage
- Includes rate limiting and security middleware
