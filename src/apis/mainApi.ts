import { instance } from "./axios";

export const getYoutube = () =>
  instance.get("/main/youtube").then((res) => res.data);
