import axios from "axios";

import type { IGithubResponce, IRepoDetailed } from "../types/types";

const base = axios.create({
  baseURL: "https://api.github.com/",
});

// API types

interface IGithubApi {
  getRepos: (
    query: string | undefined,
    page: number,
    perPage: number
  ) => Promise<IGithubResponce> | Promise<"error">;

  getRepoDetails: (
    username: string,
    reponame: string
  ) => Promise<IRepoDetailed> | Promise<"error">;
}

export const githubApi: IGithubApi = {
  getRepos: (query = "stars:%3E1", page, perPage) => {
    const uri = `search/repositories?q=${query}&sort=stars&per_page=${perPage}&page=${page}`;
    return base
      .get(uri)
      .then((r) => r.data)
      .catch(() => "error");
  },

  getRepoDetails: (username, reponame) => {
    const uri = `repos/${username}/${reponame}`;
    return base
      .get(uri)
      .then((r) => r.data)
      .catch(() => "error");
  },
};
