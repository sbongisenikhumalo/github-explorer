// Backend controller for GitHub API logic.
// Makes requests to the public GitHub REST API using axios.
const axios = require("axios");

const GITHUB_API = "https://api.github.com";

// Search for GitHub users
exports.searchUsers = async (req, res) => {
  try {
    const { q } = req.query;
    const response = await axios.get(`${GITHUB_API}/search/users?q=${q}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get user details
exports.getUser = async (req, res) => {
  try {
    const { username } = req.params;
    const [user, repos] = await Promise.all([
      axios.get(`${GITHUB_API}/users/${username}`),
      axios.get(
        `${GITHUB_API}/users/${username}/repos?sort=updated&per_page=5`
      ),
    ]);
    res.json({ user: user.data, repos: repos.data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get repository details
exports.getRepo = async (req, res) => {
  try {
    const { username, repo } = req.params;
    const [repoData, commits] = await Promise.all([
      axios.get(`${GITHUB_API}/repos/${username}/${repo}`),
      axios.get(`${GITHUB_API}/repos/${username}/${repo}/commits?per_page=5`),
    ]);
    res.json({ repo: repoData.data, commits: commits.data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
