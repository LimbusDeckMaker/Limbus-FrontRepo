import { atom } from "recoil";

interface Options {
  sinner: number[];
  season: number[];
  grade: number[];
  affiliation: string[];
  keyword: string[];
  etcKeyword: string[];
  resources: string[];
  types: string[];
  minSpeed: number;
  maxSpeed: number;
  minWeight: number;
  maxWeight: number;
}

// Filtering option state
export const optionsState = atom<Options>({
  key: "optionsState",
  default: {
    sinner: [],
    season: [],
    grade: [],
    affiliation: [],
    keyword: [],
    etcKeyword: [],
    resources: [],
    types: [],
    minSpeed: 1,
    maxSpeed: 9,
    minWeight: 1,
    maxWeight: 9,
  },
});

interface EgoOptions {
  sinner: number[];
  season: number[];
  grade: string[];
  keyword: string[];
  etcKeyword: string[];
  resources: string[];
  types: string[];
  minWeight: number;
  maxWeight: number;
}

// Filtering option state
export const egoOptionsState = atom<EgoOptions>({
  key: "egoOptionsState",
  default: {
    sinner: [],
    season: [],
    grade: [],
    keyword: [],
    etcKeyword: [],
    resources: [],
    types: [],
    minWeight: 1,
    maxWeight: 6,
  },
});
