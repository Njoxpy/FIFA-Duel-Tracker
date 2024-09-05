import { Link } from "react-router-dom";
import "../styles/statistics.css";
import Footer from "../components/Footer";

function Statistics() {
  return (
    <>
      <div className="statistics">
        <h3>Player Statistics</h3>
        <div className="player-1-container">
          <h3>Player 1</h3>
          <ul>
            <li>Total Matches: 10</li>
            <li>Wins: 6</li>
            <li>Losses: 4</li>
            <li>Average Score: 1.7</li>
          </ul>
        </div>
        <div className="player-2-container">
          <h3>Player 2</h3>
          <ul>
            <li>Total Matches: 10</li>
            <li>Wins: 2</li>
            <li>Losses: 8</li>
            <li>Average Score: 1.1</li>
          </ul>
        </div>
        <div>
          <p>
            Explore the{" "}
            <Link to="/table" className="leaderboard-link">
              leaderboard
            </Link>{" "}
            to see who’s dominating!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Statistics;
