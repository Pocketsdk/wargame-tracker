import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Mock data - will be replaced with real API calls
  const stats = [
    { label: 'Total Games', value: '24', change: '+3', changeType: 'positive', icon: '🎮' },
    { label: 'Active Players', value: '12', change: '+1', changeType: 'positive', icon: '👥' },
    { label: 'Army Types', value: '8', change: '+2', changeType: 'positive', icon: '⚔️' },
    { label: 'Win Rate', value: '58%', change: '+5%', changeType: 'positive', icon: '📈' }
  ];

  const recentGames = [
    { id: 1, player1: 'Alex', player2: 'Sam', winner: 'Alex', date: '2024-01-15', points: '1500 vs 1500' },
    { id: 2, player1: 'Jordan', player2: 'Casey', winner: 'Casey', date: '2024-01-14', points: '2000 vs 2000' },
    { id: 3, player1: 'Taylor', player2: 'Morgan', winner: 'Taylor', date: '2024-01-13', points: '1750 vs 1750' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-pdk-grey mt-2">Welcome back! Here's what's happening with your wargames.</p>
        </div>
        <Link to="/new-game" className="btn-primary">
          Start New Game
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-pdk-grey">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className="text-3xl">{stat.icon}</div>
            </div>
            <div className="mt-4">
              <span className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-pdk-grey ml-1">from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Games */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Recent Games</h2>
          <Link to="/games" className="text-pdk-blue hover:text-blue-600 font-medium">
            View All
          </Link>
        </div>
        
        <div className="space-y-4">
          {recentGames.map((game) => (
            <div key={game.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="text-2xl">🎮</div>
                <div>
                  <p className="font-medium text-gray-900">
                    {game.player1} vs {game.player2}
                  </p>
                  <p className="text-sm text-pdk-grey">{game.points} • {game.date}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pdk-blue text-white">
                  {game.winner} won
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/new-game" className="card hover:shadow-md transition-shadow cursor-pointer">
          <div className="text-center">
            <div className="text-4xl mb-4">➕</div>
            <h3 className="text-lg font-semibold text-gray-900">New Game</h3>
            <p className="text-pdk-grey mt-2">Record a new wargame match</p>
          </div>
        </Link>
        
        <Link to="/players" className="card hover:shadow-md transition-shadow cursor-pointer">
          <div className="text-center">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-lg font-semibold text-gray-900">Manage Players</h3>
            <p className="text-pdk-grey mt-2">Add or edit player profiles</p>
          </div>
        </Link>
        
        <Link to="/armies" className="card hover:shadow-md transition-shadow cursor-pointer">
          <div className="text-center">
            <div className="text-4xl mb-4">⚔️</div>
            <h3 className="text-lg font-semibold text-gray-900">Army Builder</h3>
            <p className="text-pdk-grey mt-2">Create and manage army lists</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
