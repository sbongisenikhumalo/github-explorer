import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserRepos = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        setRepos(response.data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  if (loading) return <p>Loading repositories...</p>;
  if (!repos.length) return <p>No repositories found.</p>;

  return (
    <div className="repo-list">
      {repos.map((repo) => (
        <div
          key={repo.id}
          className="repo-card"
          onClick={() => navigate(`/repos/${username}/${repo.name}`)}
          style={{ cursor: "pointer" }}
        >
          <h3>{repo.name}</h3>
          <p>{repo.description || "No description provided."}</p>
          <p>
            ⭐ Stars: {repo.stargazers_count} | 🍴 Forks: {repo.forks_count}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserRepos;
