import React, { useEffect } from "react";
import { useAuth } from "../../shared/contexts/Auth";

const UpdateProfilePage = () => {
  const { profile, setProfile, setIsLoggedIn } = useAuth();

  const toggleProfile = () => {
    if (profile) {
      setProfile(null);
      setIsLoggedIn(false);
    } else {
      setProfile({ name: "John" });
      setIsLoggedIn(true);
    }
  };

  return (
    <div>
      <pre>{JSON.stringify({ profile }, null, 2)}</pre>
      <button onClick={toggleProfile}>click to toggle</button>
    </div>
  );
};

export default UpdateProfilePage;
