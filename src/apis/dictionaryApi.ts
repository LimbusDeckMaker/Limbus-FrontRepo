import { instance } from "./axios";

interface IdentityOptions {
  sinner?: number[];
  season?: number[];
  grade?: number[];
  affiliation?: string[];
  keyword?: string[];
  resources?: string[];
  types?: string[];
  minSpeed?: number;
  maxSpeed?: number;
  minWeight?: number;
  maxWeight?: number;
}

export const getIdentity = (options: IdentityOptions) => {
  // 옵션들을 쿼리 문자열로 변환
  const query = Object.entries(options)
    .map(([key, value]) => {
      if (!value) return "";
      if (Array.isArray(value)) {
        const encodedValues = value
          .map((val) => encodeURIComponent(val))
          .join(","); // 한글 직접 들어가는거 처리
        return `${key}=${encodedValues}`;
      }
      return `${key}=${encodeURIComponent(value)}`;
    })
    .filter(Boolean)
    .join("&");

  const uri = query ? `/dictionary/identity?${query}` : "";

  return instance.get(uri).then((res) => res.data);
};
