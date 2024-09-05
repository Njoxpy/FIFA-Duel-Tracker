const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

const results = [
  {
    player: "player",
    scorep1: "23",
    scorep2: "12",
    teamp1: "newcastle",
    teamp2: "chelsea",
    finished: "no",
    winner: "yes",
    date: "2024-08-27",
    winType: "extratime-win",
  },
];

const statistics = [
  {
    team: "newcastle",
    matchesPlayed: 10,
    matchesWon: 6,
    matchesDrawn: 2,
    matchesLost: 2,
    goalsScored: 22,
    goalsConceded: 15,
    goalDifference: 7,
  },
  {
    team: "chelsea",
    matchesPlayed: 10,
    matchesWon: 5,
    matchesDrawn: 3,
    matchesLost: 2,
    goalsScored: 18,
    goalsConceded: 14,
    goalDifference: 4,
  },
];

const recent = [
  {
    matchId: "1",
    date: "2024-09-05",
    teamp1: "dortmund",
    teamp2: "leipzig",
    scorep1: "24",
    scorep2: "22",
    winner: "dortmund",
    winType: "regular",
  },
  {
    matchId: "2",
    date: "2024-09-04",
    teamp1: "ajax",
    teamp2: "real-madrid",
    scorep1: "12",
    scorep2: "25",
    winner: "real-madrid",
    winType: "regular",
  },
];

const table = [
  {
    team: "barcelona",
    matchesPlayed: 10,
    matchesWon: 8,
    matchesDrawn: 1,
    matchesLost: 1,
    goalsScored: 30,
    goalsConceded: 10,
    goalDifference: 20,
    points: 25,
  },
  {
    team: "manchester-united",
    matchesPlayed: 10,
    matchesWon: 7,
    matchesDrawn: 1,
    matchesLost: 2,
    goalsScored: 24,
    goalsConceded: 12,
    goalDifference: 12,
    points: 22,
  },
];
app.get("/", (req, res) => {
  res.json(results);
});

app.get("/api/statistics", (req, res) => {
  res.json(statistics);
});

app.get("/api/recentMatches", (req, res) => {
  res.json(recent);
});

app.get("/api/table", (req, res) => {
  res.json(table);
  console.log(table);
});

app.post("/api/addResults", (req, res) => {
  const newResults = [
    {
      player: "player1",
      scorep1: "23",
      scorep2: "12",
      teamp1: "newcastle",
      teamp2: "chelsea",
      finished: "yes",
      winner: "yes",
      date: "2024-08-27",
      winType: "regular",
    },
  ];

  res.status(200).json("created sucessfully");
  console.log(res.statusCode);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
