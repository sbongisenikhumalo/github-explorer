// This component fetches and displays a GitHub user's profile
// including their avatar, bio, and recent repositories.
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";

const UserProfile = ({ username }) => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data and repos from your backend
        const res = await axios.get(`/api/users/${username}`);
        setUser(res.data.user);
        setRepos(res.data.repos);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [username]);

  if (loading) return <Loading />;

  return (
    <div className="user-profile">
      <img src={user.avatar_url} alt={user.login} width="100" />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>

      <h3>Recent Repositories</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={`/repos/${user.login}/${repo.name}`}>{repo.name}</a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
