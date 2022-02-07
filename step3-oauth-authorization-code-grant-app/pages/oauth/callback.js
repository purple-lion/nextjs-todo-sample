import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../shared/context/auth";

const CallbackPage = () => {
  const router = useRouter();
  const { setIsSignedIn, setProfile } = useAuth();
  const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      const { code } = router.query;
      if (code) {
        try {
          const resp = await axios.post("/api/oauth/token", {
            grant_type: "authorization_code",
            code,
          });

          const { access_token, refresh_token } = resp.data;
          localStorage.setItem("access_token", access_token);
          localStorage.setItem("refresh_token", refresh_token);

          const profileResp = await axios.get(
            process.env.NEXT_PUBLIC_OAUTH_USER_INFO_ENDPOINT,
            {
              headers: {
                authorization: `Bearer ${access_token}`,
              },
            }
          );
          setIsSignedIn(true);
          setProfile(profileResp.data);
          router.push("/");
        } catch (err) {
          setError("server error");
        }
      }
    })();
  }, [router]);

  if (error) {
    return <div>{error}</div>;
  }

  return <div>Loading ...</div>;
};

export default CallbackPage;
