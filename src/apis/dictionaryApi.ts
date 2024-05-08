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
        if (key == "etcKeyword") {
          const encodedValues = value
            .map((val) => encodeURIComponent(val))
            .join(",");
          return `keyword=${encodedValues}`;
          // etcKeyword는 keyword로 변환, 쿼리에 중복으로 들어가도 작동됨
        } else {
          const encodedValues = value
            .map((val) => encodeURIComponent(val))
            .join(",");
          return `${key}=${encodedValues}`;
        }
      }
      return `${key}=${encodeURIComponent(value)}`;
    })
    .filter(Boolean)
    .join("&");

  const uri = query ? `/dictionary/identity?${query}` : "";

  return instance.get(uri).then((res) => res.data);
};
