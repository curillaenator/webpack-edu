import axios, { AxiosResponse } from "axios";

const base = axios.create({
  baseURL: "https://api.github.com/",
});

export const githubApi = {
  getRepos(query: string = "stars:%3E1"): Promise<any[]> {
    return base
      .get(`search/repositories?q=${query}&sort=stars`)
      .then((r) => r.data.items);
  },
};
