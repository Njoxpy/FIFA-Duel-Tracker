function AddResults() {
  
  return (
    <div className="add-results">
      <h2>Add Your Match Results</h2>
      <form action="">
        <label htmlFor="player-name">Choose Player Type</label>
        <select name="player" id="">
          <option value="player-name">Player 1</option>
          <option value="player-name">Player 2</option>
        </select>
        <label htmlFor="score">Player 1 Score</label>
        <input
          type="number"
          name="player-1"
          id=""
          placeholder="Enter Player 1 Score"
        />

        <label htmlFor="score">Player 2 Score</label>
        <input
          type="number"
          name="player-1"
          id=""
          placeholder="Enter Player 2 Score"
        />

        <label htmlFor="team-used">Enter team used for Player 1</label>
        <input type="text" name="" id="" placeholder="Team used by player 1"/>

        <label htmlFor="team-used">Enter team used for Player 2</label>
        <input type="text" name="" id="" placeholder="Team used by player 2"/>

        <label htmlFor="match-condition">Did The match Finished</label>
        <select name="condition" id="">
          <option value="no">no</option>
          <option value="yes">yes</option>
        </select>

        <label htmlFor="match-condition">Who Won?</label>
        <select name="condition" id="">
          <option value="no">player 1</option>
          <option value="yes">player 2</option>
        </select>

        <label htmlFor="date">Date</label>
        <input type="date" name="" id="" />

        <label htmlFor="win">Win</label>
        <select name="win" id="win">
          <option value="regular-win">Regular Win</option>
          <option value="extratime-win">Extra Time Win</option>
          <option value="penalty">Penalty Shout Out Win</option>
        </select>
      </form>
    </div>
  );
}

export default AddResults;

/*
Add Your Match Results

Player 1: [Input Field]
Player 2: [Input Field]
Score: [Input Field for Player 1’s Score] - [Input Field for Player 2’s Score]
Date: [Date Picker]

[Submit Button]

Note: Ensure all fields are filled out correctly before submitting. 
 */
