// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async (req, res) => {
  const resp = await axios.get("https://jsonplaceholder.typicode.com/todos");
  res.status(200).json(resp.data);
};
