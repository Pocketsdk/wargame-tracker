# Miniature Wargame Tracker - Project Planning

## Project Overview
A web application to track miniature wargame matches, including game logs, player profiles, army/faction tracking, and point value calculations.

## Key Questions & Decisions

### 1. Project Name
**Question**: What should we call this project?
**Answer**: wargame-tracker

### 2. Technology Stack
**Question**: What technologies should we use?
**Frontend Options**: React, Vue, vanilla JS, or something else?
**Backend Options**: Node.js/Express, Python/Flask, or just frontend for now?
**Database Options**: SQLite, PostgreSQL, or local storage to start?
**Answer**: 
- **Frontend**: React with Tailwind CSS
- **Backend**: Node.js with Express
- **Database**: MongoDB (see reasoning below)

### 3. Database Technology Recommendation
**Selected**: MongoDB
**Reasoning**:
- **Flexible Schema**: Perfect for handling various game systems with different army types, rules, and data structures
- **Dynamic Data**: Easy to add new fields, game systems, and army types on the fly without schema migrations
- **JSON-like Documents**: Natural fit for storing complex game data, army compositions, and player profiles
- **Fast Queries**: Excellent performance for reading game data and player statistics
- **Scalability**: Can handle growing datasets as you add more games and players
- **Node.js Integration**: Native MongoDB driver works seamlessly with Node.js/Express

**Alternative Considerations**:
- **PostgreSQL**: Good for complex relationships but requires schema changes for new game systems
- **SQLite**: Simple but less flexible for dynamic data structures
- **Firebase**: Good alternative if you want a managed solution

### 4. Core Features
**Question**: What are the key features to start with?
**Potential Features**:
- Game logging (date, players, armies, points, winner)
- Player profiles
- Army/faction tracking
- Point value calculations
- Game history and statistics
**Answer**: TBD

### 5. GitHub Setup
**Question**: Do you have GitHub set up locally or need help with initial setup?
**Answer**: TBD

## Project Structure
```
wargame-tracker/
├── PROJECT_PLANNING.md (this file)
├── README.md
├── frontend/          # React + Tailwind application
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/           # Node.js + Express + MongoDB
│   ├── src/
│   ├── models/
│   ├── routes/
│   └── package.json
├── docs/
└── [other project files TBD]
```

## Notes
- Project location: C:\PDKTracker
- Project name: wargame-tracker
- Created: [Current Date]
- Status: Planning Phase

## Next Steps
1. ✅ Answer key questions above
2. Set up project structure with frontend/backend folders
3. Initialize git repository
4. Push to GitHub
5. Begin development
