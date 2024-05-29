import { instance } from "./axios";

export const getIdentityDetail = (id: number) => {
  return instance.get(`/dictionary/identity/${id}`).then((res) => res.data);
};

export const getEgoDetail = (id: number) => {
  return instance.get(`/dictionary/ego/${id}`).then((res) => res.data);
};
