import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../shared/context/auth";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsSignedIn, setProfile } = useAuth();
  const router = useRouter();

  const handleSubmit = async () => {
    const resp = await axios.post("/api/oauth/token", { username, password });
    const { access_token, id_token, refresh_token } = resp.data;
    const decodedIdToken = jwtDecode(id_token);
    const profile = { email: decodedIdToken.email };

    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
    localStorage.setItem("profile", JSON.stringify(profile));

    setIsSignedIn(true);
    setProfile(profile);

    router.push("/");
  };

  return (
    <div>
      <div>
        username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        password:
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default LoginPage;
