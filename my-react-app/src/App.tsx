import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TableScreen from "./screens/TableScreen";
import AlienProfileScreen from "./screens/ProfileScreen";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<TableScreen />} />
      <Route path="/alien/:id" element={<AlienProfileScreen />} />
    </Routes>
  </Router>
);

export default App;