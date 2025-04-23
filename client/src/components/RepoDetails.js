// This component fetches details of a specific repository
// including metadata and the last 5 commits.
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";

const RepoDetails = ({ username, repoName }) => {
  const [repo, setRepo] = useState(null);
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        // Fetch repo data and commit history
        const [repoRes, commitsRes] = await Promise.all([
          axios.get(`/api/repos/${username}/${repoName}`),
          axios.get(`/api/repos/${username}/${repoName}/commits?per_page=5`),
        ]);
        setRepo(repoRes.data.repo);
        setCommits(commitsRes.data);
      } catch (err) {
        console.error("Error fetching repo data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepoData();
  }, [username, repoName]);

  if (loading) return <Loading />;
  if (!repo) return <div>Repository not found</div>;

  return (
    <div className="repo-details">
      <h2>{repo.name}</h2>
      <p>{repo.description || "No description provided"}</p>

      <div className="repo-meta">
        <span>⭐ Stars: {repo.stargazers_count}</span>
        <span>👀 Watchers: {repo.watchers_count}</span>
        <span>🍴 Forks: {repo.forks_count}</span>
      </div>

      <div className="repo-dates">
        <p>Created: {new Date(repo.created_at).toLocaleDateString()}</p>
        <p>Last updated: {new Date(repo.updated_at).toLocaleDateString()}</p>
      </div>

      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="external"
      >
        View on GitHub
      </a>

      <h3>Recent Commits</h3>
      <ul className="commit-list">
        {commits.length > 0 ? (
          commits.map((commit) => (
            <li key={commit.sha}>
              <p className="commit-message">{commit.commit.message}</p>
              <p className="commit-author">
                By {commit.author?.login || commit.commit.author.name}
              </p>
              <p className="commit-date">
                {new Date(commit.commit.author.date).toLocaleString()}
              </p>
            </li>
          ))
        ) : (
          <p>No commits found</p>
        )}
      </ul>
    </div>
  );
};

export default RepoDetails;
