import "../styles/hello.css";
import { Link } from "react-router-dom";

function Hello() {
  return (
    <div className="hello-section">
      <h4 className="heading-hello">Welcome to FIFA Face-Off!</h4>
      <p>
        Track your FIFA match results, compare statistics, and see who’s leading
        the leaderboard.
      </p>
      <div className="recent-matches">
        <h4>Recent Matches:</h4>
        <ol>
          <li>Player1 vs Player2 - Score: 2-1</li>
          <li>Player3 vs Player4 - Score: 0-3</li>
          <li>Player1 vs Player4 - Score: 1-1</li>
        </ol>
      </div>
      <div className="explore-more">
        <h4>Explore More:</h4>
        <div className="nav-links">
          <Link to="/add">Add your latest results</Link>
          <Link to="/statistics">View Player Statistics</Link>
          <Link href="/table">Check the League Table</Link>
        </div>
      </div>
    </div>
  );
}

export default Hello;
