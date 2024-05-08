import { atom } from "recoil";

// Filtering option state
export const optionsState = atom({
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
