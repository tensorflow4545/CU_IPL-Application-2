"use clients";
import React, { useState, useEffect } from "react";
import { getPointsTable } from "../services/api";
import LoaderSpinner from "./Loader";
export default function TeamStanding() {
  const [pointTable, setpointTable] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPointsTable = async () => {
      try {
        const data = await getPointsTable();
        setpointTable(data);
      } catch (err) {
        setError("Failed to load resources");
      } finally {
        setLoading(false);
      }
    };
    fetchPointsTable();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-row items-center justify-center min-h-[400px]">
        <LoaderSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-cetner p-4">{error}</div>;
  }

  return (
    <div className="w-full bg-white shadow-sm rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Points Table</h2>
      <div className="overflow-x-auto">
        <table className="w-full h-max ">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-3 text-sm font-semibold texe-center text-gray-600">
                Team
              </th>
              <th className="px-4 py-3 text-sm font-semibold texe-center text-gray-600">
                Played
              </th>
              <th className="px-4 py-3 text-sm font-semibold texe-center text-gray-600">
                W
              </th>
              <th className="px-4 py-3 text-sm font-semibold texe-center text-gray-600">
                L
              </th>
              <th className="px-4 py-3 text-sm font-semibold texe-center text-gray-600">
                Points
              </th>
              <th className="px-4 py-3 text-sm font-semibold texe-center text-gray-600">
                NRR
              </th>
            </tr>
          </thead>
          <tbody className="divide-y-4 divide-grey-50">
            {pointTable.map((team, index) => (
              <tr
                key={index}
                className={`${index % 2 == 0 ? "bg-white" : "bg-grey-50"}`}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-3">
                    <img
                      src={team.flag}
                      alt={team.team}
                      className="h-8 w-8 rounded-full"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      {team.team}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-center text-gray-600">
                  {team.played}
                </td>
                <td className="px-4 py-3 text-sm text-center text-gray-600">
                  {team.won}
                </td>
                <td className="px-4 py-3 text-sm text-center text-gray-600">
                  {team.loss}
                </td>
                <td className="px-4 py-3 text-sm text-center text-gray-600">
                  {team.points}
                </td>
                <td className="px-4 py-3 text-sm text-center text-gray-600">
                  {team.nrr}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
