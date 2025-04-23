import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Repo from "./pages/Repo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:username" element={<User />} />
        <Route path="/repos/:username/:repo" element={<Repo />} />
      </Routes>
    </Router>
  );
}

export default App;
