import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewGame = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    gameSystem: '',
    player1: '',
    player2: '',
    army1: '',
    army2: '',
    points1: '',
    points2: '',
    date: new Date().toISOString().split('T')[0],
    duration: '',
    winner: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});

  // Mock data - will be replaced with real API calls
  const gameSystems = ['Warhammer 40k', 'Age of Sigmar', 'Kill Team', 'Necromunda', 'Blood Bowl'];
  const players = ['Alex', 'Sam', 'Jordan', 'Casey', 'Taylor', 'Morgan', 'Riley', 'Quinn'];
  const armies = [
    'Space Marines - Ultramarines',
    'Orks - Goffs', 
    'Stormcast Eternals',
    'Kill Team - Deathwatch',
    'Tau Empire - Farsight Enclaves'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.gameSystem) newErrors.gameSystem = 'Game system is required';
    if (!formData.player1) newErrors.player1 = 'Player 1 is required';
    if (!formData.player2) newErrors.player2 = 'Player 2 is required';
    if (!formData.army1) newErrors.army1 = 'Army 1 is required';
    if (!formData.army2) newErrors.army2 = 'Army 2 is required';
    if (!formData.points1) newErrors.points1 = 'Points for Player 1 is required';
    if (!formData.points2) newErrors.points2 = 'Points for Player 2 is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.winner) newErrors.winner = 'Winner is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // TODO: Submit to API
      console.log('Form submitted:', formData);
      
      // Show success message and redirect
      alert('Game recorded successfully!');
      navigate('/games');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Record New Game</h1>
          <p className="text-pdk-grey mt-2">Document your latest wargame match.</p>
        </div>
        <button onClick={handleCancel} className="btn-secondary">
          Cancel
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="card space-y-6">
        {/* Game System and Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Game System *
            </label>
            <select
              name="gameSystem"
              value={formData.gameSystem}
              onChange={handleChange}
              className={`input-field ${errors.gameSystem ? 'border-red-500' : ''}`}
            >
              <option value="">Select a game system</option>
              {gameSystems.map(system => (
                <option key={system} value={system}>{system}</option>
              ))}
            </select>
            {errors.gameSystem && (
              <p className="text-red-500 text-sm mt-1">{errors.gameSystem}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`input-field ${errors.date ? 'border-red-500' : ''}`}
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date}</p>
            )}
          </div>
        </div>

        {/* Player 1 Section */}
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Player 1</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Player Name *
              </label>
              <select
                name="player1"
                value={formData.player1}
                onChange={handleChange}
                className={`input-field ${errors.player1 ? 'border-red-500' : ''}`}
              >
                <option value="">Select player</option>
                {players.map(player => (
                  <option key={player} value={player}>{player}</option>
                ))}
              </select>
              {errors.player1 && (
                <p className="text-red-500 text-sm mt-1">{errors.player1}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Army *
              </label>
              <select
                name="army1"
                value={formData.army1}
                onChange={handleChange}
                className={`input-field ${errors.army1 ? 'border-red-500' : ''}`}
              >
                <option value="">Select army</option>
                {armies.map(army => (
                  <option key={army} value={army}>{army}</option>
                ))}
              </select>
              {errors.army1 && (
                <p className="text-red-500 text-sm mt-1">{errors.army1}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Points *
              </label>
              <input
                type="number"
                name="points1"
                value={formData.points1}
                onChange={handleChange}
                placeholder="e.g., 2000"
                className={`input-field ${errors.points1 ? 'border-red-500' : ''}`}
              />
              {errors.points1 && (
                <p className="text-red-500 text-sm mt-1">{errors.points1}</p>
              )}
            </div>
          </div>
        </div>

        {/* Player 2 Section */}
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Player 2</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Player Name *
              </label>
              <select
                name="player2"
                value={formData.player2}
                onChange={handleChange}
                className={`input-field ${errors.player2 ? 'border-red-500' : ''}`}
              >
                <option value="">Select player</option>
                {players.map(player => (
                  <option key={player} value={player}>{player}</option>
                ))}
              </select>
              {errors.player2 && (
                <p className="text-red-500 text-sm mt-1">{errors.player2}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Army *
              </label>
              <select
                name="army2"
                value={formData.army2}
                onChange={handleChange}
                className={`input-field ${errors.army2 ? 'border-red-500' : ''}`}
              >
                <option value="">Select army</option>
                {armies.map(army => (
                  <option key={army} value={army}>{army}</option>
                ))}
              </select>
              {errors.army2 && (
                <p className="text-red-500 text-sm mt-1">{errors.army2}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Points *
              </label>
              <input
                type="number"
                name="points2"
                value={formData.points2}
                onChange={handleChange}
                placeholder="e.g., 2000"
                className={`input-field ${errors.points2 ? 'border-red-500' : ''}`}
              />
              {errors.points2 && (
                <p className="text-red-500 text-sm mt-1">{errors.points2}</p>
              )}
            </div>
          </div>
        </div>

        {/* Game Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Winner *
            </label>
            <select
              name="winner"
              value={formData.winner}
              onChange={handleChange}
              className={`input-field ${errors.winner ? 'border-red-500' : ''}`}
            >
              <option value="">Select winner</option>
              <option value={formData.player1}>{formData.player1 || 'Player 1'}</option>
              <option value={formData.player2}>{formData.player2 || 'Player 2'}</option>
              <option value="draw">Draw</option>
            </select>
            {errors.winner && (
              <p className="text-red-500 text-sm mt-1">{errors.winner}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duration
            </label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="e.g., 3h 15m"
              className="input-field"
            />
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Game Notes
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={4}
            placeholder="Any special events, memorable moments, or additional details about the game..."
            className="input-field"
          />
        </div>

        {/* Submit Buttons */}
        <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={handleCancel}
            className="btn-secondary"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn-primary"
          >
            Record Game
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewGame;
