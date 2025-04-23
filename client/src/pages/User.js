import { useParams } from "react-router-dom";
import UserProfile from "../components/UserProfile";

const User = () => {
  const { username } = useParams();
  return <UserProfile username={username} />;
};

export default User;
