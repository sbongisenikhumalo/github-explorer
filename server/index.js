const express = require("express");
const axios = require("axios");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/api/search/:username", async (req, res) => {
  try {
    const username = req.params.username;
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching user" });
  }
});

app.get("/api/repos/:username", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${req.params.username}/repos`
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching repos" });
  }
});

app.get("/api/commits/:username/:repo", async (req, res) => {
  try {
    const { username, repo } = req.params;
    const response = await axios.get(
      `https://api.github.com/repos/${username}/${repo}/commits`
    );
    res.json(response.data.slice(0, 5)); // Last 5 commits
  } catch (err) {
    res.status(500).json({ message: "Error fetching commits" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
