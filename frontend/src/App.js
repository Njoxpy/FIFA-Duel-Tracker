import "./index.css";
import Hello from "./pages/Hello";
import LeagueTable from "./pages/LeagueTablePage"
import Statistics from "./pages/StatisticsPage";
import AddResults from "./pages/AddResultsPage";

import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Hello />}/>
      <Route path="/add" element={<AddResults />} />
      <Route path="/table" element={<LeagueTable />} />
      <Route path="/statistics" element={<Statistics />} />
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
