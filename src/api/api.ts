import axios from "axios";

const base = axios.create({
  baseURL: "https://api.github.com/search/",
});

export const githubApi = {
  getRepos(
    query: string = "stars:%3E1",
    page: number,
    perPage: number
  ): Promise<any> {
    return base
      .get(
        `repositories?q=${query}&sort=stars&per_page=${perPage}&page=${page}`
      )
      .then((r) => r.data);
  },
};
