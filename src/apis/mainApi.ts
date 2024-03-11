import { instance } from "./axios";

export const getYoutube = () =>
  instance.get("/main/youtube").then((res) => res.data);

export const getNews = () =>
  instance.get("/main/news").then((res) => res.data);