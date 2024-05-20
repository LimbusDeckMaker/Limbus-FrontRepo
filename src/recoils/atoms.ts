import { EgoOptions } from "@interfaces/ego";
import { IdentityOptions } from "@interfaces/identity";
import { atom } from "recoil";

// Filtering option state
export const optionsState = atom<IdentityOptions>({
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

interface synchronization {
  synchronization: number;
}

export const synchronizationState = atom<synchronization>({
  key: "synchronizationState",
  default: {
    synchronization: 0,
  },
});

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
