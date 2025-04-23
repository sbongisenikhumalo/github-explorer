import { useParams } from "react-router-dom";
import RepoDetails from "../components/RepoDetails";

const Repo = () => {
  const { username, repo } = useParams();

  return (
    <div className="repo-page">
      <RepoDetails username={username} repoName={repo} />
    </div>
  );
};

export default Repo;
