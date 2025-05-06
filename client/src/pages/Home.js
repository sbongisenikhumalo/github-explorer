import React, { useState } from "react";
import UserSearch from "../components/UserSearch";
import UserProfile from "../components/UserProfile";
import UserRepos from "../components/UserRepos"; // 👈 Add this line

const Home = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="container">
      <h1 className="main-heading">🔍 GitHub Explorer</h1>
      <div className="search-section">
        <UserSearch setUser={setUser} />
      </div>
      {user && (
        <>
          <UserProfile user={user} />
          <h2 className="section-heading">Repositories</h2>
          <UserRepos username={user.login} />
        </>
      )}
    </div>
  );
};

export default Home;
