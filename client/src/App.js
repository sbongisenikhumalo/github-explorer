import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RepoDetails from "./components/RepoDetails"; // ✅ Make sure this path matches your structure
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repos/:username/:repoName" element={<RepoDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
