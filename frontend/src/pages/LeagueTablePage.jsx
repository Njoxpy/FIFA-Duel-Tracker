function LeagueTable() {
  return (
    <div className="table-container">
      <h4>League Table</h4>
      <div className="table-conatiner">
        <table>
          <thead>
            <tr>
              <th>player</th>
              <th>Points</th>
              <th>Match Played</th>
              <th>Goal Difference</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>player 1</td>
              <td>18</td>
              <td>6</td>
              <td>+5</td>
            </tr>
            <tr>
              <td>player 2</td>
              <td>15</td>
              <td>12</td>
              <td>-3</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Keep playing and submit your results to climb the leaderboard!</p>
    </div>
  );
}

export default LeagueTable;

// add-result