const express = require("express");
const router = express.Router();
const {
  searchUsers,
  getUser,
  getRepo,
} = require("../controllers/githubController");

router.get("/search", searchUsers);
router.get("/users/:username", getUser);
router.get("/repos/:username/:repo", getRepo);

module.exports = router;
