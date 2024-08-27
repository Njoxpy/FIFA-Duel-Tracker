import "./index.css";
import Navbar from "./components/Navbar";
import Hello from "./home/Hello";
import Footer from "./components/Footer"
import LeagueTable from "./pages/LeagueTablePage"
import Statistics from "./pages/StatisticsPage";
import AddResults from "./pages/AddResultsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hello />
      <Footer />
      <LeagueTable />
      <Statistics />
      <AddResults />
    </div>
  );
}

export default App;
