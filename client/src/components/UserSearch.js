// This component allows the user to search for GitHub users by typing in a username.
// It manages input state, fetches user data from the backend, and displays results.

const React = require("react");
const { useState } = React;
const Loading = require("./Loading");

const UserSearch = () => {
  const [query, setQuery] = useState(""); //Stores the search input
  const [users, setUsers] = useState([]); // Stores the results from GitHub
  const [loading, setLoading] = useState(false); // Controls the loading state

  const searchUsers = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Calls the backend API which in turn fetches from GitHub API
      const res = await fetch(`/api/search?q=${query}`);
      const data = await res.json();
      setUsers(data.items);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={searchUsers}>
      <input
        type="text"
        placeholder="Search GitHub users"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
      {loading && <Loading />}
    </form>
  );
};

module.exports = UserSearch;
