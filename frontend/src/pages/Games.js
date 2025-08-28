import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Games = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock data - will be replaced with real API calls
  const games = [
    { 
      id: 1, 
      player1: 'Alex', 
      player2: 'Sam', 
      winner: 'Alex', 
      date: '2024-01-15', 
      points: '1500 vs 1500',
      gameSystem: 'Warhammer 40k',
      duration: '3h 15m',
      status: 'completed'
    },
    { 
      id: 2, 
      player1: 'Jordan', 
      player2: 'Casey', 
      winner: 'Casey', 
      date: '2024-01-14', 
      points: '2000 vs 2000',
      gameSystem: 'Age of Sigmar',
      duration: '2h 45m',
      status: 'completed'
    },
    { 
      id: 3, 
      player1: 'Taylor', 
      player2: 'Morgan', 
      winner: 'Taylor', 
      date: '2024-01-13', 
      points: '1750 vs 1750',
      gameSystem: 'Warhammer 40k',
      duration: '4h 20m',
      status: 'completed'
    },
    { 
      id: 4, 
      player1: 'Riley', 
      player2: 'Quinn', 
      winner: null, 
      date: '2024-01-16', 
      points: '1000 vs 1000',
      gameSystem: 'Kill Team',
      duration: '1h 30m',
      status: 'in-progress'
    }
  ];

  const filteredGames = games.filter(game => {
    const matchesSearch = game.player1.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.player2.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.gameSystem.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || game.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status) => {
    const statusConfig = {
      'completed': { color: 'bg-green-100 text-green-800', text: 'Completed' },
      'in-progress': { color: 'bg-yellow-100 text-yellow-800', text: 'In Progress' },
      'planned': { color: 'bg-blue-100 text-blue-800', text: 'Planned' }
    };
    
    const config = statusConfig[status] || statusConfig['planned'];
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
        {config.text}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Games</h1>
          <p className="text-pdk-grey mt-2">Track all your wargame matches and results.</p>
        </div>
        <Link to="/new-game" className="btn-primary">
          New Game
        </Link>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search games, players, or game systems..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pdk-blue focus:border-transparent"
        >
          <option value="all">All Status</option>
          <option value="completed">Completed</option>
          <option value="in-progress">In Progress</option>
          <option value="planned">Planned</option>
        </select>
      </div>

      {/* Games List */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-pdk-grey uppercase tracking-wider">
                  Game Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-pdk-grey uppercase tracking-wider">
                  Players
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-pdk-grey uppercase tracking-wider">
                  Game System
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-pdk-grey uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-pdk-grey uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredGames.map((game) => (
                <tr key={game.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {game.points} points
                      </div>
                      <div className="text-sm text-pdk-grey">
                        {game.date} • {game.duration}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <div>{game.player1} vs {game.player2}</div>
                      {game.winner && (
                        <div className="text-sm text-pdk-blue font-medium">
                          Winner: {game.winner}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{game.gameSystem}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(game.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-pdk-blue hover:text-blue-600 mr-3">
                      Edit
                    </button>
                    <button className="text-pdk-orange hover:text-orange-600">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      {filteredGames.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎮</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No games found</h3>
          <p className="text-pdk-grey mb-6">
            {searchTerm || filterStatus !== 'all' 
              ? 'Try adjusting your search or filters.'
              : 'Get started by recording your first game!'
            }
          </p>
          <Link to="/new-game" className="btn-primary">
            Record Your First Game
          </Link>
        </div>
      )}
    </div>
  );
};

export default Games;
