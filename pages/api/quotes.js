import axios from "axios";

export default async function handler(req, res) {
  const url = process.env.ENDPOINT;
  const { method, body } = req;
  const { character, quantity } = body;
  switch (method) {
    case "GET":
      const { data } = await axios.get(url);
      return res.status(200).json(data);
    case "POST":
      if (!character && !quantity) {
        const { data } = await axios.get(url);
        return res.status(200).json(data);
      }
      if (!character && quantity) {
        const { data } = await axios.get(`${url}?count=${quantity}`);
        return res.status(200).json(data);
      }
      if (character && !quantity) {
        const { data } = await axios.get(`${url}?character=${character}`);
        return res.status(200).json(data);
      }
      if (character && quantity) {
        const { data } = await axios.get(
          `${url}?count=${quantity}&character=${character}`
        );
        return res.status(200).json(data);
      }
  }
}
