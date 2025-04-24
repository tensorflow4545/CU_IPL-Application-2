"use clients";
import { useState } from "react";
import { Award, Zap } from "lucide-react";

export default function StatsPage() {
  const [activeTab, setActiveTab] = useState("batting");

  const battingStats = [
    {
      rank: 1,
      player: "Virat Kohli",
      team: "RCB",
      matches: 8,
      runs: 380,
      avg: 63.33,
      sr: 155.1,
      fifties: 4,
      hundreds: 1,
    },
    {
      rank: 2,
      player: "KL Rahul",
      team: "LSG",
      matches: 8,
      runs: 356,
      avg: 59.33,
      sr: 142.4,
      fifties: 3,
      hundreds: 1,
    },
    {
      rank: 3,
      player: "Shubman Gill",
      team: "GT",
      matches: 8,
      runs: 344,
      avg: 49.14,
      sr: 138.71,
      fifties: 3,
      hundreds: 0,
    },
    {
      rank: 4,
      player: "Jos Buttler",
      team: "RR",
      matches: 7,
      runs: 311,
      avg: 51.83,
      sr: 150.97,
      fifties: 2,
      hundreds: 1,
    },
    {
      rank: 5,
      player: "Suryakumar Yadav",
      team: "MI",
      matches: 8,
      runs: 298,
      avg: 42.57,
      sr: 170.29,
      fifties: 3,
      hundreds: 0,
    },
  ];

  const bowlingStats = [
    {
      rank: 1,
      player: "Jasprit Bumrah",
      team: "MI",
      matches: 8,
      wickets: 15,
      economy: 6.78,
      avg: 14.2,
      sr: 12.53,
      best: "4/20",
    },
    {
      rank: 2,
      player: "Yuzvendra Chahal",
      team: "RR",
      matches: 8,
      wickets: 14,
      economy: 7.93,
      avg: 17.07,
      sr: 12.93,
      best: "4/17",
    },
    {
      rank: 3,
      player: "T Natarajan",
      team: "SRH",
      matches: 8,
      wickets: 13,
      economy: 8.65,
      avg: 20.0,
      sr: 13.85,
      best: "3/10",
    },
    {
      rank: 4,
      player: "Rashid Khan",
      team: "GT",
      matches: 8,
      wickets: 12,
      economy: 6.95,
      avg: 17.42,
      sr: 15.0,
      best: "3/14",
    },
    {
      rank: 5,
      player: "Mohammed Siraj",
      team: "RCB",
      matches: 8,
      wickets: 11,
      economy: 7.82,
      avg: 21.36,
      sr: 16.36,
      best: "3/22",
    },
  ];

  return (
    <div className="py-8 px-4 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">IPL 2025 Statistics</h1>
          <p className="text-gray-600">Comprehensive stats of all players</p>
        </div>

        {/* Button */}
        <div className="bg-white rounded-sm shadow overflow-hidden mb-8">
          <div className="grid grid-cols-2 divide-x-2 divide-y-2 border-b">
            <button
              className={`py-4 flex justify-center items-center font-medium ${
                activeTab == "batting"
                  ? "bg-orange-50 bg-orange-600 "
                  : " hover:gray-50"
              }`}
              onClick={() => setActiveTab("batting")}
            >
              <Award className="w-4 h-4 mr-2" /> Batting
            </button>
            <button
              className={`py-4 flex justify-center items-center font-medium ${
                activeTab == "bowling"
                  ? "bg-orange-50 bg-orange-600 "
                  : " hover:gray-50"
              }`}
              onClick={() => setActiveTab("bowling")}
            >
              <Zap className="w-4 h-4 mr-2" /> Bowling
            </button>
            <button
              className={`py-4 flex justify-center items-center font-medium ${
                activeTab == "bowling"
                  ? "bg-orange-50 bg-orange-600 "
                  : " hover:gray-50"
              }`}
              onClick={() => setActiveTab("bowling")}
            >
              <Zap className="w-4 h-4 mr-2" /> Bowling
            </button>
            <button
              className={`py-4 flex justify-center items-center font-medium ${
                activeTab == "bowling"
                  ? "bg-orange-50 bg-orange-600 "
                  : " hover:gray-50"
              }`}
              onClick={() => setActiveTab("bowling")}
            >
              <Zap className="w-4 h-4 mr-2" /> Bowling
            </button>
          </div>

          <div className="p-6">
            {/* Batting */}
            {activeTab == "batting" && (
              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  Most Runs
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y-2 divide-y-gray-50">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 py-4 text-left font-medium text-gray-500 uppercase tracking-wider">
                          Rank
                        </th>
                        <th className="px-3 py-4 text-left font-medium text-gray-500 uppercase tracking-wider">
                          Player
                        </th>
                        <th className="px-3 py-4 text-left font-medium text-gray-500 uppercase tracking-wider">
                          Team
                        </th>
                        <th className="px-3 py-4 text-left font-medium text-gray-500 uppercase tracking-wider">
                          M
                        </th>
                        <th className="px-3 py-4 text-left font-medium text-gray-500 uppercase tracking-wider">
                          Runs
                        </th>
                        <th className="px-3 py-4 text-left font-medium text-gray-500 uppercase tracking-wider">
                          Avg
                        </th>
                        <th className="px-3 py-4 text-left font-medium text-gray-500 uppercase tracking-wider">
                          SR
                        </th>
                        <th className="px-3 py-4 text-left font-medium text-gray-500 uppercase tracking-wider">
                          50s/100s
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {battingStats.map((batting, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-3 py-4 text-sm font-medium text-gray-900">
                            {batting.rank}
                          </td>
                          <td className="px-3 py-4 text-sm font-medium text-gray-900">
                            {batting.player}
                          </td>
                          <td className="px-3 py-4 text-sm font-medium text-gray-900">
                            {batting.team}
                          </td>
                          <td className="px-3 py-4 text-sm font-medium text-gray-900">
                            {batting.matches}
                          </td>
                          <td className="px-3 py-4 text-sm font-medium text-gray-900">
                            {batting.runs}
                          </td>
                          <td className="px-3 py-4 text-sm font-medium text-gray-900">
                            {batting.avg}
                          </td>
                          <td className="px-3 py-4 text-sm font-medium text-gray-900">
                            {batting.sr}
                          </td>
                          <td className="px-3 py-4 text-sm font-medium text-gray-900">
                            {batting.fifties}/{batting.hundreds}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Bowling */}
            {activeTab == "bowling" && (
              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  Most Wickets
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y-2 divide-y-gray-50">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 py-4 text-left font-medium text-gray-500 uppercase tracking-wider">
                          Rank
                        </th>
                        <th className="px-3 py-4 text-left font-medium text-gray-500 uppercase tracking-wider">
                          Player
                        </th>
                        <th className="px-3 py-4 text-left font-medium text-gray-500 uppercase tracking-wider">
                          Team
                        </th>
                        <th className="px-3 py-4 text-left font-medium text-gray-500 uppercase tracking-wider">
                          M
                        </th>
                        <th className="px-3 py-4 text-left font-medium text-gray-500 uppercase tracking-wider">
                          W
                        </th>
                        <th className="px-3 py-4 text-left font-medium text-gray-500 uppercase tracking-wider">
                          Econ
                        </th>
                        <th className="px-3 py-4 text-left font-medium text-gray-500 uppercase tracking-wider">
                          Avg
                        </th>
                        <th className="px-3 py-4 text-left font-medium text-gray-500 uppercase tracking-wider">
                          Best
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {bowlingStats.map((bowling, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-3 py-4 text-sm font-medium text-gray-900">
                            {bowling.rank}
                          </td>
                          <td className="px-3 py-4 text-sm font-medium text-gray-900">
                            {bowling.player}
                          </td>
                          <td className="px-3 py-4 text-sm font-medium text-gray-900">
                            {bowling.team}
                          </td>
                          <td className="px-3 py-4 text-sm font-medium text-gray-900">
                            {bowling.matches}
                          </td>
                          <td className="px-3 py-4 text-sm font-medium text-gray-900">
                            {bowling.wickets}
                          </td>
                          <td className="px-3 py-4 text-sm font-medium text-gray-900">
                            {bowling.economy}
                          </td>
                          <td className="px-3 py-4 text-sm font-medium text-gray-900">
                            {bowling.avg}
                          </td>
                          <td className="px-3 py-4 text-sm font-medium text-gray-900">
                            {bowling.best}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
