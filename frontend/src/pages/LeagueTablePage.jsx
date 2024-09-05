import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import "../styles/table.css";

function LeagueTable() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const URL = "http://localhost:5000/api/table";

    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          console.log("network error");
        }
        return response.json();
      })
      .then((data) => {
        setTeams(data);
        setLoading(false);
      })
      // .then((data) => console.log(data))
      .catch((error) => {
        console.error(`There was a problem with fetch operation ${error}`);
      });
  }, []);

  if (loading) {
    <div>Loading....</div>;
  }
  return (
    <>
      <div className="table-container">
        <div className="table-conatiner">
          <hr />
          <h4 className="league-table-heading">League Table</h4>
          <table className="content-table">
            <thead>
              <tr>
                <th>player</th>
                <th>Points</th>
                <th>Match Played</th>
                <th>Goal Difference</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team.team}>
                  <td>{team.team}</td>
                  <td>{team.matchesPlayed}</td>
                  <td>{team.matchesWon}</td>
                  <td>{team.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>Keep playing and submit your results to climb the leaderboard!</p>
      </div>
      <Footer />
    </>
  );
}

export default LeagueTable;

/*
here the league table data will be fetched from an api and should be encoded into the website 
 */
