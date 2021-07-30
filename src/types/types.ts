import type { SyntheticEvent, ReactNode } from "react";
import type { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import type { TState } from "../redux/store";

// COMMON

export interface IBtnPrimary {
  title: string | number;
  icon?: ReactNode;
  param?: number;
  active?: boolean;
  disabled?: boolean;
  handler: (param?: number) => void;
}

// REDUX & STATE

export type TReducer<S, A = AnyAction> = (state: S, action: A) => S; // localc state reducer

export type TAction<P> = (payload: P) => { type: string; payload: P }; // action creator

export type TThunk = ThunkAction<void, TState, unknown, AnyAction>; // thunk

// EVENTS

export type TEventHandler<E extends SyntheticEvent<any>> = (event: E) => void;

// GITHUB API RESPONSES

const repoInList = {
  id: 28457823,
  node_id: "MDEwOlJlcG9zaXRvcnkyODQ1NzgyMw==",
  name: "freeCodeCamp",
  full_name: "freeCodeCamp/freeCodeCamp",
  private: false,
  owner: {
    login: "freeCodeCamp",
    id: 9892522,
    node_id: "MDEyOk9yZ2FuaXphdGlvbjk4OTI1MjI=",
    avatar_url: "https://avatars.githubusercontent.com/u/9892522?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/freeCodeCamp",
    html_url: "https://github.com/freeCodeCamp",
    followers_url: "https://api.github.com/users/freeCodeCamp/followers",
    following_url:
      "https://api.github.com/users/freeCodeCamp/following{/other_user}",
    gists_url: "https://api.github.com/users/freeCodeCamp/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/freeCodeCamp/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/freeCodeCamp/subscriptions",
    organizations_url: "https://api.github.com/users/freeCodeCamp/orgs",
    repos_url: "https://api.github.com/users/freeCodeCamp/repos",
    events_url: "https://api.github.com/users/freeCodeCamp/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/freeCodeCamp/received_events",
    type: "Organization",
    site_admin: false,
  },
  html_url: "https://github.com/freeCodeCamp/freeCodeCamp",
  description:
    "freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.",
  fork: false,
  url: "https://api.github.com/repos/freeCodeCamp/freeCodeCamp",
  forks_url: "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/forks",
  keys_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/keys{/key_id}",
  collaborators_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/collaborators{/collaborator}",
  teams_url: "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/teams",
  hooks_url: "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/hooks",
  issue_events_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/events{/number}",
  events_url: "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/events",
  assignees_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/assignees{/user}",
  branches_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/branches{/branch}",
  tags_url: "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/tags",
  blobs_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/blobs{/sha}",
  git_tags_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/tags{/sha}",
  git_refs_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/refs{/sha}",
  trees_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/trees{/sha}",
  statuses_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/statuses/{sha}",
  languages_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/languages",
  stargazers_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/stargazers",
  contributors_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/contributors",
  subscribers_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/subscribers",
  subscription_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/subscription",
  commits_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/commits{/sha}",
  git_commits_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/git/commits{/sha}",
  comments_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/comments{/number}",
  issue_comment_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/comments{/number}",
  contents_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/contents/{+path}",
  compare_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/compare/{base}...{head}",
  merges_url: "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/merges",
  archive_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/{archive_format}{/ref}",
  downloads_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/downloads",
  issues_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues{/number}",
  pulls_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/pulls{/number}",
  milestones_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/milestones{/number}",
  notifications_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/notifications{?since,all,participating}",
  labels_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/labels{/name}",
  releases_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/releases{/id}",
  deployments_url:
    "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/deployments",
  created_at: "2014-12-24T17:49:19Z",
  updated_at: "2021-07-30T10:40:23Z",
  pushed_at: "2021-07-30T07:53:35Z",
  git_url: "git://github.com/freeCodeCamp/freeCodeCamp.git",
  ssh_url: "git@github.com:freeCodeCamp/freeCodeCamp.git",
  clone_url: "https://github.com/freeCodeCamp/freeCodeCamp.git",
  svn_url: "https://github.com/freeCodeCamp/freeCodeCamp",
  homepage: "https://contribute.freecodecamp.org",
  size: 212940,
  stargazers_count: 327060,
  watchers_count: 327060,
  language: "JavaScript",
  has_issues: true,
  has_projects: false,
  has_downloads: true,
  has_wiki: false,
  has_pages: true,
  forks_count: 26209,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 240,
  license: {
    key: "bsd-3-clause",
    name: 'BSD 3-Clause "New" or "Revised" License',
    spdx_id: "BSD-3-Clause",
    url: "https://api.github.com/licenses/bsd-3-clause",
    node_id: "MDc6TGljZW5zZTU=",
  },
  forks: 26209,
  open_issues: 240,
  watchers: 327060,
  default_branch: "main",
  score: 1,
};
const repoDetailed = {
  id: 21737465,
  node_id: "MDEwOlJlcG9zaXRvcnkyMTczNzQ2NQ==",
  name: "awesome",
  full_name: "sindresorhus/awesome",
  private: false,
  owner: {
    login: "sindresorhus",
    id: 170270,
    node_id: "MDQ6VXNlcjE3MDI3MA==",
    avatar_url: "https://avatars.githubusercontent.com/u/170270?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/sindresorhus",
    html_url: "https://github.com/sindresorhus",
    followers_url: "https://api.github.com/users/sindresorhus/followers",
    following_url:
      "https://api.github.com/users/sindresorhus/following{/other_user}",
    gists_url: "https://api.github.com/users/sindresorhus/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/sindresorhus/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/sindresorhus/subscriptions",
    organizations_url: "https://api.github.com/users/sindresorhus/orgs",
    repos_url: "https://api.github.com/users/sindresorhus/repos",
    events_url: "https://api.github.com/users/sindresorhus/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/sindresorhus/received_events",
    type: "User",
    site_admin: false,
  },
  html_url: "https://github.com/sindresorhus/awesome",
  description: "😎 Awesome lists about all kinds of interesting topics",
  fork: false,
  url: "https://api.github.com/repos/sindresorhus/awesome",
  forks_url: "https://api.github.com/repos/sindresorhus/awesome/forks",
  keys_url: "https://api.github.com/repos/sindresorhus/awesome/keys{/key_id}",
  collaborators_url:
    "https://api.github.com/repos/sindresorhus/awesome/collaborators{/collaborator}",
  teams_url: "https://api.github.com/repos/sindresorhus/awesome/teams",
  hooks_url: "https://api.github.com/repos/sindresorhus/awesome/hooks",
  issue_events_url:
    "https://api.github.com/repos/sindresorhus/awesome/issues/events{/number}",
  events_url: "https://api.github.com/repos/sindresorhus/awesome/events",
  assignees_url:
    "https://api.github.com/repos/sindresorhus/awesome/assignees{/user}",
  branches_url:
    "https://api.github.com/repos/sindresorhus/awesome/branches{/branch}",
  tags_url: "https://api.github.com/repos/sindresorhus/awesome/tags",
  blobs_url:
    "https://api.github.com/repos/sindresorhus/awesome/git/blobs{/sha}",
  git_tags_url:
    "https://api.github.com/repos/sindresorhus/awesome/git/tags{/sha}",
  git_refs_url:
    "https://api.github.com/repos/sindresorhus/awesome/git/refs{/sha}",
  trees_url:
    "https://api.github.com/repos/sindresorhus/awesome/git/trees{/sha}",
  statuses_url:
    "https://api.github.com/repos/sindresorhus/awesome/statuses/{sha}",
  languages_url: "https://api.github.com/repos/sindresorhus/awesome/languages",
  stargazers_url:
    "https://api.github.com/repos/sindresorhus/awesome/stargazers",
  contributors_url:
    "https://api.github.com/repos/sindresorhus/awesome/contributors",
  subscribers_url:
    "https://api.github.com/repos/sindresorhus/awesome/subscribers",
  subscription_url:
    "https://api.github.com/repos/sindresorhus/awesome/subscription",
  commits_url:
    "https://api.github.com/repos/sindresorhus/awesome/commits{/sha}",
  git_commits_url:
    "https://api.github.com/repos/sindresorhus/awesome/git/commits{/sha}",
  comments_url:
    "https://api.github.com/repos/sindresorhus/awesome/comments{/number}",
  issue_comment_url:
    "https://api.github.com/repos/sindresorhus/awesome/issues/comments{/number}",
  contents_url:
    "https://api.github.com/repos/sindresorhus/awesome/contents/{+path}",
  compare_url:
    "https://api.github.com/repos/sindresorhus/awesome/compare/{base}...{head}",
  merges_url: "https://api.github.com/repos/sindresorhus/awesome/merges",
  archive_url:
    "https://api.github.com/repos/sindresorhus/awesome/{archive_format}{/ref}",
  downloads_url: "https://api.github.com/repos/sindresorhus/awesome/downloads",
  issues_url:
    "https://api.github.com/repos/sindresorhus/awesome/issues{/number}",
  pulls_url: "https://api.github.com/repos/sindresorhus/awesome/pulls{/number}",
  milestones_url:
    "https://api.github.com/repos/sindresorhus/awesome/milestones{/number}",
  notifications_url:
    "https://api.github.com/repos/sindresorhus/awesome/notifications{?since,all,participating}",
  labels_url: "https://api.github.com/repos/sindresorhus/awesome/labels{/name}",
  releases_url:
    "https://api.github.com/repos/sindresorhus/awesome/releases{/id}",
  deployments_url:
    "https://api.github.com/repos/sindresorhus/awesome/deployments",
  created_at: "2014-07-11T13:42:37Z",
  updated_at: "2021-07-30T09:55:23Z",
  pushed_at: "2021-07-29T13:20:51Z",
  git_url: "git://github.com/sindresorhus/awesome.git",
  ssh_url: "git@github.com:sindresorhus/awesome.git",
  clone_url: "https://github.com/sindresorhus/awesome.git",
  svn_url: "https://github.com/sindresorhus/awesome",
  homepage: "",
  size: 1410,
  stargazers_count: 166401,
  watchers_count: 166401,
  language: "Shell",
  has_issues: true,
  has_projects: false,
  has_downloads: true,
  has_wiki: false,
  has_pages: true,
  forks_count: 21235,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 29,
  license: {
    key: "cc0-1.0",
    name: "Creative Commons Zero v1.0 Universal",
    spdx_id: "CC0-1.0",
    url: "https://api.github.com/licenses/cc0-1.0",
    node_id: "MDc6TGljZW5zZTY=",
  },
  forks: 21235,
  open_issues: 29,
  watchers: 166401,
  default_branch: "main",
  temp_clone_token: null,
  network_count: 21235,
  subscribers_count: 7179,
};

export type IRepoInList = typeof repoInList;
export type IRepoDetailed = typeof repoDetailed;
export interface IRepoListResponce {
  total_count: number;
  incomplete_results: boolean;
  items: IRepoInList[];
}
