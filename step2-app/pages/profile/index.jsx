import React from "react";
import { useAuth } from "../../shared/contexts/Auth";

const ProfilePage = () => {
  const { profile, isLoggedIn } = useAuth();

  return (
    <div>
      <h1>profile</h1>
      <pre>{JSON.stringify({ profile, isLoggedIn }, null, 2)}</pre>
    </div>
  );
};

export default ProfilePage;
