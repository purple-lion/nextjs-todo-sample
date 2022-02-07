import qs from "querystring";
import React, { useEffect } from "react";

const LoginPage = () => {
  useEffect(() => {
    const host = process.env.NEXT_PUBLIC_OAUTH_AUTHORIZATION_ENDPOINT;
    const client_id = process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID;
    const redirect_uri = process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URI;
    const scope = process.env.NEXT_PUBLIC_OAUTH_SCOPE;
    const response_type = "code";
    const authorize_uri = `${host}?${qs.stringify({
      client_id,
      redirect_uri,
      response_type,
      scope,
    })}`;
    window.location.href = authorize_uri;
  }, []);

  return <div>Loading ...</div>;
};

export default LoginPage;
