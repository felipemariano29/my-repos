import axios from "axios";

const headers = {
  Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
};

const api = axios.create({
  baseURL: "https://api.github.com",
  headers,
});

export default api;
