import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RepoDetails = () => {
  const { username, repoName } = useParams();
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${username}/${repoName}/commits?per_page=5`
        );
        setCommits(response.data);
      } catch (error) {
        console.error("Error fetching commits:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
  }, [username, repoName]);

  if (loading) return <p>Loading commits...</p>;
  if (!commits.length) return <p>No commits found.</p>;

  return (
    <div className="repo-details">
      <h2 className="section-heading">Last 5 Commits for {repoName}</h2>
      <ul>
        {commits.map((commit, index) => (
          <li key={index} className="repo-card">
            <strong>Message:</strong> {commit.commit.message}
            <br />
            <strong>Author:</strong> {commit.commit.author.name}
            <br />
            <strong>Date:</strong>{" "}
            {new Date(commit.commit.author.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoDetails;
