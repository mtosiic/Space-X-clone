import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./components/views/HomeView";
import LaunchesView from "./components/views/LaunchesView";
import RocketsView from "./components/views/RocketsView";
import ShipsView from "./components/views/ShipsView";
import { Navbar } from "./components/navbar";
import LaunchesContextProvider from "./context/LaunchesContext";
import ShipsContextProvider from "./context/ShipsContext";
import RocketsContextProvider from "./context/RocketsContext";
import LaunchView from "./components/views/LaunchView";
import RocketView from "./components/views/RocketView";
import ShipView from "./components/views/ShipView";

function App() {
  return (
    <div className="App">
      <Router>
        <LaunchesContextProvider>
          <ShipsContextProvider>
            <RocketsContextProvider>
              <div className="view-wrapper">
                <Navbar />
                <Routes>
                  <Route path="/launches" element={<LaunchesView />} />
                  <Route path="/launches/:launchId" element={<LaunchView />} />
                  <Route path="/rockets" element={<RocketsView />} />
                  <Route path="/rockets/:rocketId" element={<RocketView />} />
                  <Route path="/ships" element={<ShipsView />} />
                  <Route path="/ships/:shipId" element={<ShipView />} />
                  <Route path="/" element={<HomeView />} />
                </Routes>
              </div>
            </RocketsContextProvider>
          </ShipsContextProvider>
        </LaunchesContextProvider>
      </Router>
    </div>
  );
}

export default App;
