import React, { useState } from "react";
import axios from "axios";

const UserSearch = ({ setUser }) => {
  const [username, setUsername] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/search/${username}`);
      setUser(response.data);
    } catch (error) {
      alert("User not found");
      setUser(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default UserSearch;
