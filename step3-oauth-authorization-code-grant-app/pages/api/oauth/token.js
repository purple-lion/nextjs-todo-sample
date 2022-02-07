import axios from "axios";
import qs from "qs";

export default async (req, res) => {
  const OAUTH_TOKEN_ENDPOINT = process.env.NEXT_PUBLIC_OAUTH_TOKEN_ENDPOINT;
  const OAUTH_CLIENT_ID = process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID;
  const OAUTH_CLIENT_SECRET = process.env.NEXT_PUBLIC_OAUTH_CLIENT_SECRET;
  const OAUTH_SCOPE = process.env.NEXT_PUBLIC_OAUTH_SCOPE;

  const { grant_type } = req.body;

  if (grant_type === "password") {
    const { username, password } = req.body;
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
        grant_type,
        username,
        password,
        scope: OAUTH_SCOPE,
      }),
      {
        headers,
      }
    );

    res.status(200).json(resp.data);
  } else if (grant_type === "authorization_code") {
    const { code } = req.body;
    const basicHeader = Buffer.from(
      `${OAUTH_CLIENT_ID}:${OAUTH_CLIENT_SECRET}`
    ).toString("base64");
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      Authorization: `Basic ${basicHeader}`,
    };

    const body = qs.stringify({
      grant_type,
      code,
      redirect_uri: process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URI,
    });
    try {
      const resp = await axios.post(OAUTH_TOKEN_ENDPOINT, body, {
        headers,
      });
      res.status(200).json(resp.data);
    } catch (err) {
      res.status(400).json({ err });
    }
  } else if (grant_type === "refresh_token") {
    const { refresh_token } = req.body;
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
        grant_type,
        refresh_token,
      }),
      {
        headers,
      }
    );

    res.status(200).json(resp.data);
  } else {
    res.status(400).json({});
  }
};
