import axios from "axios";
import qs from "qs";

export default async (req, res) => {
  const { username, password } = req.body;
  const OAUTH_TOKEN_ENDPOINT = process.env.NEXT_PUBLIC_OAUTH_TOKEN_ENDPOINT;
  const OAUTH_CLIENT_ID = process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID;
  const OAUTH_CLIENT_SECRET = process.env.NEXT_PUBLIC_OAUTH_CLIENT_SECRET;
  const OAUTH_SCOPE = process.env.NEXT_PUBLIC_OAUTH_SCOPE;

  const basicHeader = Buffer.from(
    `${OAUTH_CLIENT_ID}:${OAUTH_CLIENT_SECRET}`
  ).toString("base64");
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    Authorization: `Basic ${basicHeader}`,
  };

  const resp = await axios.post(
    OAUTH_TOKEN_ENDPOINT,
    qs.stringify({
      grant_type: "password",
      username,
      password,
      scope: OAUTH_SCOPE,
    }),
    {
      headers,
    }
  );

  res.status(200).json(resp.data);
};
