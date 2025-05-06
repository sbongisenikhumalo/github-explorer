import React from "react";
// Import motion from Framer Motion for animation
import { motion } from "framer-motion";

// This component shows the user's GitHub profile details
const UserProfile = ({ user }) => {
  // If there's no user data, don't show anything
  if (!user) return null;

  return (
    // Animate the user card to fade in and slide up when it appears
    <motion.div
      className="user-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={user.avatar_url} alt={user.login} width={100} />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <p>
        Followers: {user.followers} | Following: {user.following}
      </p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </motion.div>
  );
};

export default UserProfile;
