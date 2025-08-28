import React, { useState } from 'react';

const Armies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGameSystem, setFilterGameSystem] = useState('all');

  // Mock data - will be replaced with real API calls
  const armies = [
    {
      id: 1,
      name: 'Space Marines - Ultramarines',
      gameSystem: 'Warhammer 40k',
      points: 2000,
      player: 'Alex',
      units: 15,
      lastUsed: '2024-01-15',
      winRate: '75%',
      status: 'active'
    },
    {
      id: 2,
      name: 'Orks - Goffs',
      gameSystem: 'Warhammer 40k',
      points: 1500,
      player: 'Sam',
      units: 12,
      lastUsed: '2024-01-14',
      winRate: '60%',
      status: 'active'
    },
    {
      id: 3,
      name: 'Stormcast Eternals',
      gameSystem: 'Age of Sigmar',
      points: 2000,
      player: 'Jordan',
      units: 8,
      lastUsed: '2024-01-13',
      winRate: '40%',
      status: 'active'
    },
    {
      id: 4,
      name: 'Kill Team - Deathwatch',
      gameSystem: 'Kill Team',
      points: 100,
      player: 'Casey',
      units: 6,
      lastUsed: '2024-01-12',
      winRate: '80%',
      status: 'active'
    },
    {
      id: 5,
      name: 'Tau Empire - Farsight Enclaves',
      gameSystem: 'Warhammer 40k',
      points: 1750,
      player: 'Taylor',
      units: 10,
      lastUsed: '2024-01-10',
      winRate: '55%',
      status: 'active'
    }
  ];

  const gameSystems = ['all', ...new Set(armies.map(army => army.gameSystem))];

  const filteredArmies = armies.filter(army => {
    const matchesSearch = army.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         army.player.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterGameSystem === 'all' || army.gameSystem === filterGameSystem;
    
    return matchesSearch && matchesFilter;
  });

  const getWinRateColor = (winRate) => {
    const rate = parseInt(winRate);
    if (rate >= 70) return 'text-green-600';
    if (rate >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getGameSystemColor = (gameSystem) => {
    const colors = {
      'Warhammer 40k': 'bg-blue-100 text-blue-800',
      'Age of Sigmar': 'bg-purple-100 text-purple-800',
      'Kill Team': 'bg-green-100 text-green-800'
    };
    return colors[gameSystem] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Armies</h1>
          <p className="text-pdk-grey mt-2">Manage your army compositions and track their performance.</p>
        </div>
        <button className="btn-primary">
          Create Army
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search armies, players, or game systems..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field"
          />
        </div>
        <select
          value={filterGameSystem}
          onChange={(e) => setFilterGameSystem(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pdk-blue focus:border-transparent"
        >
          {gameSystems.map(system => (
            <option key={system} value={system}>
              {system === 'all' ? 'All Systems' : system}
            </option>
          ))}
        </select>
      </div>

      {/* Armies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArmies.map((army) => (
          <div key={army.id} className="card hover:shadow-md transition-shadow">
            {/* Army Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{army.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getGameSystemColor(army.gameSystem)}`}>
                    {army.gameSystem}
                  </span>
                  <span className="text-sm text-pdk-grey">by {army.player}</span>
                </div>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {army.status}
              </span>
            </div>

            {/* Army Stats */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{army.points}</div>
                <div className="text-xs text-pdk-grey">Points</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{army.units}</div>
                <div className="text-xs text-pdk-grey">Units</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${getWinRateColor(army.winRate)}`}>
                  {army.winRate}
                </div>
                <div className="text-xs text-pdk-grey">Win Rate</div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-pdk-grey">Last Used:</span>
                <span className="text-gray-900">{army.lastUsed}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <button className="flex-1 btn-secondary text-sm py-2">
                Edit
              </button>
              <button className="flex-1 btn-accent text-sm py-2">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredArmies.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No armies found</h3>
          <p className="text-pdk-grey mb-6">
            {searchTerm || filterGameSystem !== 'all'
              ? 'Try adjusting your search or filters.'
              : 'Get started by creating your first army!'
            }
          </p>
          <button className="btn-primary">
            Create Your First Army
          </button>
        </div>
      )}

      {/* Quick Stats */}
      {filteredArmies.length > 0 && (
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Army Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-pdk-blue">{filteredArmies.length}</div>
              <div className="text-sm text-pdk-grey">Total Armies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pdk-orange">
                {Math.round(filteredArmies.reduce((acc, army) => acc + army.points, 0) / filteredArmies.length)}
              </div>
              <div className="text-sm text-pdk-grey">Avg Points</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pdk-grey">
                {new Set(filteredArmies.map(army => army.gameSystem)).size}
              </div>
              <div className="text-sm text-pdk-grey">Game Systems</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {Math.round(filteredArmies.reduce((acc, army) => acc + parseInt(army.winRate), 0) / filteredArmies.length)}%
              </div>
              <div className="text-sm text-pdk-grey">Avg Win Rate</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Armies;
