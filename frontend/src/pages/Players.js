import React, { useState } from 'react';

const Players = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddPlayer, setShowAddPlayer] = useState(false);

  // Mock data - will be replaced with real API calls
  const players = [
    {
      id: 1,
      name: 'Alex',
      email: 'alex@example.com',
      totalGames: 15,
      wins: 9,
      losses: 6,
      winRate: '60%',
      favoriteGameSystem: 'Warhammer 40k',
      joinDate: '2023-06-15',
      status: 'active'
    },
    {
      id: 2,
      name: 'Sam',
      email: 'sam@example.com',
      totalGames: 12,
      wins: 7,
      losses: 5,
      winRate: '58%',
      favoriteGameSystem: 'Age of Sigmar',
      joinDate: '2023-07-20',
      status: 'active'
    },
    {
      id: 3,
      name: 'Jordan',
      email: 'jordan@example.com',
      totalGames: 8,
      wins: 3,
      losses: 5,
      winRate: '38%',
      favoriteGameSystem: 'Kill Team',
      joinDate: '2023-08-10',
      status: 'active'
    },
    {
      id: 4,
      name: 'Casey',
      email: 'casey@example.com',
      totalGames: 20,
      wins: 14,
      losses: 6,
      winRate: '70%',
      favoriteGameSystem: 'Warhammer 40k',
      joinDate: '2023-05-01',
      status: 'active'
    }
  ];

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.favoriteGameSystem.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getWinRateColor = (winRate) => {
    const rate = parseInt(winRate);
    if (rate >= 70) return 'text-green-600';
    if (rate >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Players</h1>
          <p className="text-pdk-grey mt-2">Manage your wargame community and track player statistics.</p>
        </div>
        <button 
          onClick={() => setShowAddPlayer(true)}
          className="btn-primary"
        >
          Add Player
        </button>
      </div>

      {/* Search */}
      <div className="max-w-md">
        <input
          type="text"
          placeholder="Search players or game systems..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input-field"
        />
      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlayers.map((player) => (
          <div key={player.id} className="card hover:shadow-md transition-shadow">
            {/* Player Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-pdk-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {player.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{player.name}</h3>
                  <p className="text-sm text-pdk-grey">{player.email}</p>
                </div>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {player.status}
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{player.totalGames}</div>
                <div className="text-xs text-pdk-grey">Games</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{player.wins}</div>
                <div className="text-xs text-pdk-grey">Wins</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${getWinRateColor(player.winRate)}`}>
                  {player.winRate}
                </div>
                <div className="text-xs text-pdk-grey">Win Rate</div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-pdk-grey">Favorite System:</span>
                <span className="text-gray-900 font-medium">{player.favoriteGameSystem}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-pdk-grey">Member Since:</span>
                <span className="text-gray-900">{player.joinDate}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <button className="flex-1 btn-secondary text-sm py-2">
                Edit
              </button>
              <button className="flex-1 btn-accent text-sm py-2">
                View Stats
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredPlayers.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">👥</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No players found</h3>
          <p className="text-pdk-grey mb-6">
            {searchTerm 
              ? 'Try adjusting your search.'
              : 'Get started by adding your first player!'
            }
          </p>
          <button onClick={() => setShowAddPlayer(true)} className="btn-primary">
            Add Your First Player
          </button>
        </div>
      )}

      {/* Add Player Modal Placeholder */}
      {showAddPlayer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Player</h3>
            <p className="text-pdk-grey mb-4">Player creation form will be implemented here.</p>
            <div className="flex space-x-3">
              <button 
                onClick={() => setShowAddPlayer(false)}
                className="btn-secondary flex-1"
              >
                Cancel
              </button>
              <button className="btn-primary flex-1">
                Add Player
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Players;
