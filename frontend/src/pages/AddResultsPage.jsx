import { useState } from "react";
import "../styles/addResults.css";
import Footer from "../components/Footer";

function AddResults() {
  // Create states
  const [player, setPlayer] = useState("player 1");
  const [scorep1, setScorep1] = useState(0);
  const [scorep2, setScorep2] = useState(0);
  const [teamp1, setTeamp1] = useState("");
  const [teamp2, setTeamp2] = useState("");
  const [finished, setFinished] = useState("yes");
  const [winner, setWinner] = useState("player 1");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [winType, setWinType] = useState("regular-win");
  const [error, setError] = useState("");

  const URL = "http://localhost:5000/api/addResults";

  // Handle submit
  const handleSubmit = async (e) => {
    // Prevent browser default behavior
    e.preventDefault();

    const results = { player, scorep1, scorep2, teamp1, teamp2, finished, winner, date, winType };
    console.log(results);

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(results)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      setError('Failed to submit the results. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <>
    <div className="add-results">
      <form onSubmit={handleSubmit}>
        <h2>Add Your Match Results</h2>

        <label htmlFor="player">Choose Player Type</label>
        <select
          name="player"
          id="player"
          value={player}
          required
          onChange={(e) => setPlayer(e.target.value)}
        >
          <option value="player 1">Player 1</option>
          <option value="player 2">Player 2</option>
        </select>

        <label htmlFor="scorep1">Player 1 Score</label>
        <input
          type="number"
          name="scorep1"
          id="scorep1"
          placeholder="Enter Player 1 Score"
          value={scorep1}
          required
          onChange={(e) => setScorep1(e.target.value)}
        />

        <label htmlFor="scorep2">Player 2 Score</label>
        <input
          type="number"
          name="scorep2"
          id="scorep2"
          placeholder="Enter Player 2 Score"
          value={scorep2}
          required
          onChange={(e) => setScorep2(e.target.value)}
        />

        <label htmlFor="teamp1">Enter Team Used for Player 1</label>
        <input
          type="text"
          name="teamp1"
          id="teamp1"
          placeholder="Team used by Player 1"
          value={teamp1}
          required
          onChange={(e) => setTeamp1(e.target.value)}
        />

        <label htmlFor="teamp2">Enter Team Used for Player 2</label>
        <input
          type="text"
          name="teamp2"
          id="teamp2"
          placeholder="Team used by Player 2"
          value={teamp2}
          required
          onChange={(e) => setTeamp2(e.target.value)}
        />

        <label htmlFor="finished">Did the Match Finish?</label>
        <select
          name="finished"
          id="finished"
          value={finished}
          required
          onChange={(e) => setFinished(e.target.value)}
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>

        <label htmlFor="winner">Who Won?</label>
        <select
          name="winner"
          id="winner"
          value={winner}
          required
          onChange={(e) => setWinner(e.target.value)}
        >
          <option value="player 1">Player 1</option>
          <option value="player 2">Player 2</option>
        </select>

        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          value={date}
          required
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="winType">Win Type</label>
        <select
          name="winType"
          id="winType"
          value={winType}
          required
          onChange={(e) => setWinType(e.target.value)}
        >
          <option value="regular-win">Regular Win</option>
          <option value="extratime-win">Extra Time Win</option>
          <option value="penalty">Penalty Shootout Win</option>
        </select>

        <button type="submit">Submit</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
    <Footer />
    </>
  );
}

export default AddResults;
