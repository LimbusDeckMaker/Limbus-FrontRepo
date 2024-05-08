import { atom } from "recoil";

interface Options {
  sinner: number[];
  season: number[];
  grade: number[];
  affiliation: string[];
  keyword: string[];
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
    resources: [],
    types: [],
    minSpeed: 1,
    maxSpeed: 9,
    minWeight: 1,
    maxWeight: 9,
  },
});
