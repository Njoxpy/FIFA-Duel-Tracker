function Hello() {
  return (
    <div className="hello-section">
      <h4>Welcome to FIFA Face-Off!</h4>
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
          <a href="/add">Add your latest results</a>
          <a href="/statistics">View Player Statistics</a>
          <a href="/table">Check the League Table</a>
        </div>
      </div>
    </div>
  );
}

export default Hello;
