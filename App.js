import { useState } from 'react';

// Sample data for different sports
const sportsData = {
  football: {
    teams: [
      { id: 1, name: 'Manchester United', logo: '🔴' },
      { id: 2, name: 'Barcelona', logo: '🔵' },
      { id: 3, name: 'Bayern Munich', logo: '🔴' },
      { id: 4, name: 'Liverpool', logo: '🔴' },
      { id: 5, name: 'Real Madrid', logo: '⚪' },
    ],
    matches: [
      {
        id: 1, 
        homeTeam: 'Manchester United', 
        awayTeam: 'Barcelona', 
        homeScore: 2, 
        awayScore: 1, 
        date: '2025-04-15', 
        league: 'Champions League',
        stats: {
          possession: { home: 45, away: 55 },
          shots: { home: 12, away: 15 },
          shotsOnTarget: { home: 6, away: 5 },
          corners: { home: 7, away: 4 },
          fouls: { home: 10, away: 12 }
        }
      },
      {
        id: 2, 
        homeTeam: 'Bayern Munich', 
        awayTeam: 'Real Madrid', 
        homeScore: 3, 
        awayScore: 3, 
        date: '2025-04-18', 
        league: 'Champions League',
        stats: {
          possession: { home: 52, away: 48 },
          shots: { home: 18, away: 10 },
          shotsOnTarget: { home: 8, away: 6 },
          corners: { home: 9, away: 3 },
          fouls: { home: 8, away: 14 }
        }
      },
      {
        id: 3, 
        homeTeam: 'Liverpool', 
        awayTeam: 'Manchester United', 
        homeScore: 1, 
        awayScore: 0, 
        date: '2025-04-21', 
        league: 'Premier League',
        stats: {
          possession: { home: 58, away: 42 },
          shots: { home: 16, away: 9 },
          shotsOnTarget: { home: 7, away: 3 },
          corners: { home: 8, away: 2 },
          fouls: { home: 6, away: 11 }
        }
      },
    ]
  },
  basketball: {
    teams: [
      { id: 1, name: 'LA Lakers', logo: '💜' },
      { id: 2, name: 'Boston Celtics', logo: '☘️' },
      { id: 3, name: 'Golden State Warriors', logo: '💙' },
      { id: 4, name: 'Chicago Bulls', logo: '❤️' },
      { id: 5, name: 'Miami Heat', logo: '🔥' },
    ],
    matches: [
      {
        id: 1, 
        homeTeam: 'LA Lakers', 
        awayTeam: 'Boston Celtics', 
        homeScore: 112, 
        awayScore: 106, 
        date: '2025-04-17', 
        league: 'NBA',
        stats: {
          rebounds: { home: 40, away: 38 },
          assists: { home: 25, away: 22 },
          steals: { home: 8, away: 7 },
          blocks: { home: 5, away: 3 },
          threePointers: { home: 12, away: 10 }
        },
        quarters: [
          { home: 28, away: 24 },
          { home: 26, away: 32 },
          { home: 30, away: 25 },
          { home: 28, away: 25 }
        ]
      },
      {
        id: 2, 
        homeTeam: 'Golden State Warriors', 
        awayTeam: 'Miami Heat', 
        homeScore: 120, 
        awayScore: 114, 
        date: '2025-04-19', 
        league: 'NBA',
        stats: {
          rebounds: { home: 45, away: 36 },
          assists: { home: 30, away: 24 },
          steals: { home: 6, away: 9 },
          blocks: { home: 4, away: 2 },
          threePointers: { home: 15, away: 12 }
        },
        quarters: [
          { home: 32, away: 28 },
          { home: 24, away: 26 },
          { home: 34, away: 30 },
          { home: 30, away: 30 }
        ]
      },
      {
        id: 3, 
        homeTeam: 'Chicago Bulls', 
        awayTeam: 'LA Lakers', 
        homeScore: 98, 
        awayScore: 105, 
        date: '2025-04-22', 
        league: 'NBA',
        stats: {
          rebounds: { home: 37, away: 42 },
          assists: { home: 21, away: 27 },
          steals: { home: 10, away: 7 },
          blocks: { home: 3, away: 6 },
          threePointers: { home: 9, away: 13 }
        },
        quarters: [
          { home: 24, away: 27 },
          { home: 28, away: 25 },
          { home: 22, away: 29 },
          { home: 24, away: 24 }
        ]
      },
    ]
  },
  cricket: {
    teams: [
      { id: 1, name: 'India', logo: '🇮🇳' },
      { id: 2, name: 'Australia', logo: '🇦🇺' },
      { id: 3, name: 'England', logo: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
      { id: 4, name: 'New Zealand', logo: '🇳🇿' },
      { id: 5, name: 'South Africa', logo: '🇿🇦' },
    ],
    matches: [
      {
        id: 1, 
        homeTeam: 'India', 
        awayTeam: 'Australia', 
        date: '2025-04-12', 
        format: 'T20',
        result: 'India won by 25 runs',
        innings: [
          { 
            team: 'India', 
            runs: 186, 
            wickets: 5, 
            overs: 20.0,
            topScorers: [
              { name: 'Kohli', runs: 73, balls: 52 },
              { name: 'Sharma', runs: 46, balls: 31 }
            ],
            topBowlers: [
              { name: 'Bumrah', wickets: 3, runs: 22, overs: 4 },
              { name: 'Kumar', wickets: 2, runs: 26, overs: 4 }
            ]
          },
          { 
            team: 'Australia', 
            runs: 161, 
            wickets: 10, 
            overs: 19.2,
            topScorers: [
              { name: 'Maxwell', runs: 55, balls: 32 },
              { name: 'Warner', runs: 38, balls: 25 }
            ],
            topBowlers: [
              { name: 'Starc', wickets: 2, runs: 38, overs: 4 },
              { name: 'Cummins', wickets: 1, runs: 29, overs: 4 }
            ]
          }
        ]
      },
      {
        id: 2, 
        homeTeam: 'England', 
        awayTeam: 'New Zealand', 
        date: '2025-04-14', 
        format: 'ODI',
        result: 'New Zealand won by 4 wickets',
        innings: [
          { 
            team: 'England', 
            runs: 278, 
            wickets: 8, 
            overs: 50.0,
            topScorers: [
              { name: 'Root', runs: 87, balls: 94 },
              { name: 'Stokes', runs: 65, balls: 73 }
            ],
            topBowlers: [
              { name: 'Archer', wickets: 1, runs: 45, overs: 10 },
              { name: 'Wood', wickets: 2, runs: 52, overs: 10 }
            ]
          },
          { 
            team: 'New Zealand', 
            runs: 279, 
            wickets: 6, 
            overs: 48.3,
            topScorers: [
              { name: 'Williamson', runs: 103, balls: 112 },
              { name: 'Conway', runs: 67, balls: 78 }
            ],
            topBowlers: [
              { name: 'Boult', wickets: 3, runs: 44, overs: 10 },
              { name: 'Southee', wickets: 2, runs: 56, overs: 10 }
            ]
          }
        ]
      },
      {
        id: 3, 
        homeTeam: 'South Africa', 
        awayTeam: 'India', 
        date: '2025-04-20', 
        format: 'Test',
        result: 'Match drawn',
        innings: [
          { 
            team: 'South Africa', 
            runs: 342, 
            wickets: 10, 
            overs: 93.4,
            topScorers: [
              { name: 'de Kock', runs: 96, balls: 162 },
              { name: 'Bavuma', runs: 78, balls: 135 }
            ],
            topBowlers: []
          },
          { 
            team: 'India', 
            runs: 376, 
            wickets: 10, 
            overs: 104.2,
            topScorers: [
              { name: 'Pujara', runs: 123, balls: 246 },
              { name: 'Pant', runs: 85, balls: 106 }
            ],
            topBowlers: []
          },
          { 
            team: 'South Africa', 
            runs: 298, 
            wickets: 8, 
            overs: 96.0,
            topScorers: [
              { name: 'Markram', runs: 85, balls: 147 },
              { name: 'Elgar', runs: 64, balls: 124 }
            ],
            topBowlers: []
          },
          { 
            team: 'India', 
            runs: 173, 
            wickets: 5, 
            overs: 51.2,
            topScorers: [
              { name: 'Rahul', runs: 67, balls: 102 },
              { name: 'Jadeja', runs: 42, balls: 56 }
            ],
            topBowlers: []
          }
        ]
      },
    ]
  }
};

// Main component
export default function SportsScoreTracker() {
  const [selectedSport, setSelectedSport] = useState('football');
  const [selectedMode, setSelectedMode] = useState('past');
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [showStats, setShowStats] = useState(false);

  // Filter matches by selected team if any
  const filteredMatches = selectedSport ? sportsData[selectedSport].matches.filter(match => 
    !selectedTeam || match.homeTeam === selectedTeam || match.awayTeam === selectedTeam
  ) : [];

  // Handle sport selection
  const handleSportChange = (sport) => {
    setSelectedSport(sport);
    setSelectedTeam(null);
    setSelectedMatch(null);
    setShowStats(false);
  };

  // Handle team selection
  const handleTeamSelect = (teamName) => {
    setSelectedTeam(teamName === selectedTeam ? null : teamName);
    setSelectedMatch(null);
    setShowStats(false);
  };

  // Handle match selection
  const handleMatchSelect = (match) => {
    setSelectedMatch(match.id === (selectedMatch?.id || null) ? null : match);
    setShowStats(false);
  };

  // Toggle stats view
  const toggleStats = () => {
    setShowStats(!showStats);
  };

  // Render sport selection tabs
  const renderSportTabs = () => (
    <div className="flex justify-center space-x-4 mb-6">
      {Object.keys(sportsData).map(sport => (
        <button
          key={sport}
          className={`px-4 py-2 rounded-lg font-medium ${
            selectedSport === sport 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
          }`}
          onClick={() => handleSportChange(sport)}
        >
          {sport.charAt(0).toUpperCase() + sport.slice(1)}
        </button>
      ))}
    </div>
  );

  // Render mode selection tabs
  const renderModeTabs = () => (
    <div className="flex justify-center space-x-4 mb-6">
      <button
        className={`px-4 py-2 rounded-lg font-medium ${
          selectedMode === 'live' 
            ? 'bg-green-600 text-white' 
            : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
        }`}
        onClick={() => setSelectedMode('live')}
      >
        Live
      </button>
      <button
        className={`px-4 py-2 rounded-lg font-medium ${
          selectedMode === 'past' 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
        }`}
        onClick={() => setSelectedMode('past')}
      >
        Past
      </button>
    </div>
  );

  // Render team selection
  const renderTeamSelection = () => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3 text-center">Teams</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {sportsData[selectedSport].teams.map(team => (
          <button
            key={team.id}
            className={`px-3 py-2 rounded-lg ${
              selectedTeam === team.name 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => handleTeamSelect(team.name)}
          >
            <span className="mr-2">{team.logo}</span>
            {team.name}
          </button>
        ))}
      </div>
    </div>
  );

  // Render match cards based on the selected sport
  const renderMatchCards = () => {
    if (selectedMode === 'live' && filteredMatches.length === 0) {
      return (
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <p className="text-lg text-gray-600">No live matches available at the moment.</p>
          <p className="text-sm text-gray-500 mt-2">Check back later or view past matches.</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredMatches.map(match => (
          <div 
            key={match.id} 
            className={`p-4 rounded-lg cursor-pointer transition ${
              selectedMatch?.id === match.id 
                ? 'bg-blue-100 border-2 border-blue-500' 
                : 'bg-white border border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => handleMatchSelect(match)}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium text-gray-500">
                {match.league || match.format}
              </span>
              <span className="text-xs text-gray-500">{match.date}</span>
            </div>
            
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center">
                <span className="text-lg mr-2">
                  {sportsData[selectedSport].teams.find(t => t.name === match.homeTeam)?.logo || '🏠'}
                </span>
                <span className="font-medium">{match.homeTeam}</span>
              </div>
              {selectedSport !== 'cricket' && (
                <span className="font-bold text-lg">{match.homeScore}</span>
              )}
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-lg mr-2">
                  {sportsData[selectedSport].teams.find(t => t.name === match.awayTeam)?.logo || '✈️'}
                </span>
                <span className="font-medium">{match.awayTeam}</span>
              </div>
              {selectedSport !== 'cricket' && (
                <span className="font-bold text-lg">{match.awayScore}</span>
              )}
            </div>
            
            {selectedSport === 'cricket' && (
              <div className="mt-2 text-sm text-gray-700">
                <p>{match.result}</p>
              </div>
            )}

            {selectedMatch?.id === match.id && (
              <div className="mt-3 flex justify-end">
                <button 
                  className="text-sm text-blue-600 hover:text-blue-800"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleStats();
                  }}
                >
                  {showStats ? 'Hide Details' : 'Show Details'}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Render match details based on the selected sport
  const renderMatchDetails = () => {
    if (!selectedMatch || !showStats) return null;

    if (selectedSport === 'football') {
      return (
        <div className="mt-6 bg-white p-5 rounded-lg border border-gray-300">
          <h3 className="text-xl font-bold mb-4 text-center">Match Statistics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium text-lg">{selectedMatch.homeTeam}</span>
              <span className="font-medium text-lg">{selectedMatch.awayTeam}</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-bold">{selectedMatch.stats.possession.home}%</span>
                <span className="text-sm text-gray-600">Possession</span>
                <span className="font-bold">{selectedMatch.stats.possession.away}%</span>
              </div>
              
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${selectedMatch.stats.possession.home}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-bold">{selectedMatch.stats.shots.home}</span>
                <span className="text-sm text-gray-600">Shots</span>
                <span className="font-bold">{selectedMatch.stats.shots.away}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-bold">{selectedMatch.stats.shotsOnTarget.home}</span>
                <span className="text-sm text-gray-600">Shots on Target</span>
                <span className="font-bold">{selectedMatch.stats.shotsOnTarget.away}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-bold">{selectedMatch.stats.corners.home}</span>
                <span className="text-sm text-gray-600">Corners</span>
                <span className="font-bold">{selectedMatch.stats.corners.away}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-bold">{selectedMatch.stats.fouls.home}</span>
                <span className="text-sm text-gray-600">Fouls</span>
                <span className="font-bold">{selectedMatch.stats.fouls.away}</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (selectedSport === 'basketball') {
      return (
        <div className="mt-6 bg-white p-5 rounded-lg border border-gray-300">
          <h3 className="text-xl font-bold mb-4 text-center">Match Statistics</h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Score by Quarter</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 text-left">Team</th>
                    <th className="py-2 text-center">Q1</th>
                    <th className="py-2 text-center">Q2</th>
                    <th className="py-2 text-center">Q3</th>
                    <th className="py-2 text-center">Q4</th>
                    <th className="py-2 text-center">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium">{selectedMatch.homeTeam}</td>
                    {selectedMatch.quarters.map((q, i) => (
                      <td key={i} className="py-2 text-center">{q.home}</td>
                    ))}
                    <td className="py-2 text-center font-bold">{selectedMatch.homeScore}</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">{selectedMatch.awayTeam}</td>
                    {selectedMatch.quarters.map((q, i) => (
                      <td key={i} className="py-2 text-center">{q.away}</td>
                    ))}
                    <td className="py-2 text-center font-bold">{selectedMatch.awayScore}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium text-lg">{selectedMatch.homeTeam}</span>
              <span className="font-medium text-lg">{selectedMatch.awayTeam}</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-bold">{selectedMatch.stats.rebounds.home}</span>
                <span className="text-sm text-gray-600">Rebounds</span>
                <span className="font-bold">{selectedMatch.stats.rebounds.away}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-bold">{selectedMatch.stats.assists.home}</span>
                <span className="text-sm text-gray-600">Assists</span>
                <span className="font-bold">{selectedMatch.stats.assists.away}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-bold">{selectedMatch.stats.steals.home}</span>
                <span className="text-sm text-gray-600">Steals</span>
                <span className="font-bold">{selectedMatch.stats.steals.away}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-bold">{selectedMatch.stats.blocks.home}</span>
                <span className="text-sm text-gray-600">Blocks</span>
                <span className="font-bold">{selectedMatch.stats.blocks.away}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-bold">{selectedMatch.stats.threePointers.home}</span>
                <span className="text-sm text-gray-600">3-Pointers</span>
                <span className="font-bold">{selectedMatch.stats.threePointers.away}</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (selectedSport === 'cricket') {
      return (
        <div className="mt-6 bg-white p-5 rounded-lg border border-gray-300">
          <h3 className="text-xl font-bold mb-4 text-center">Match Details</h3>
          <p className="text-center mb-4 font-medium">{selectedMatch.result}</p>
          
          {selectedMatch.innings.map((inning, idx) => (
            <div key={idx} className="mb-6 pb-4 border-b border-gray-200 last:border-0">
              <h4 className="text-lg font-semibold mb-2">{inning.team} - {inning.runs}/{inning.wickets} ({inning.overs} overs)</h4>
              
              {inning.topScorers && inning.topScorers.length > 0 && (
                <div className="mb-4">
                  <h5 className="font-medium text-sm text-gray-600 mb-2">Top Batsmen</h5>
                  <div className="space-y-1">
                    {inning.topScorers.map((player, pidx) => (
                      <div key={pidx} className="flex justify-between">
                        <span>{player.name}</span>
                        <span className="font-medium">{player.runs} runs ({player.balls} balls)</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {inning.topBowlers && inning.topBowlers.length > 0 && (
                <div>
                  <h5 className="font-medium text-sm text-gray-600 mb-2">Top Bowlers</h5>
                  <div className="space-y-1">
                    {inning.topBowlers.map((player, pidx) => (
                      <div key={pidx} className="flex justify-between">
                        <span>{player.name}</span>
                        <span className="font-medium">{player.wickets}/{player.runs} ({player.overs} overs)</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }
    
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-center mb-8">
          <span className="text-3xl mr-3">🏆</span>
          <h1 className="text-3xl font-bold">Live Sports Score Tracker</h1>
        </header>
        
        {renderSportTabs()}
        {renderModeTabs()}
        {renderTeamSelection()}
        
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">
            {selectedMode === 'live' ? 'Live Matches' : 'Past Matches'}
          </h2>
          {renderMatchCards()}
        </div>
        
        {renderMatchDetails()}
      </div>
    </div>
  );
}