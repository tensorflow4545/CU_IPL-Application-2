import axios from "axios";
const API_URL = "https://cricket-live-line1.p.rapidapi.com";
const HEADERS = {
  "x-rapidapi-key": "60af64af2bmsh2265032cba6c184p1e9ac3jsnca5a6bee2c22",
  "x-rapidapi-host": "cricket-live-line1.p.rapidapi.com",
};

export const getPointsTable = async () => {
  const options = {
    method: "Get",
    url: `${API_URL}/series/336/pointsTable`,
    headers: HEADERS,
  };

  try {
    const response = await axios.request(options);

    if (!response.data?.status || !response.data?.data?.A) {
      throw new error("Invalid points table formate");
    }

    return response.data.data.A.map((team) => ({
      team: team.teams,
      played: team.P,
      won: team.W,
      loss: team.L,
      points: team.Pts,
      nrr: team.NRR,
      flag: team.flag,
    }));
  } catch (error) {
    console.log(error);
    throw error;
  }
};
