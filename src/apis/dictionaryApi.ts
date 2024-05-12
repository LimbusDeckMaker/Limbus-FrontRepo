import { instance } from "./axios";

interface IdentityOptions {
  sinner?: number[];
  season?: number[];
  grade?: number[];
  affiliation?: string[];
  keyword?: string[];
  etcKeyword?: string[];
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
    .filter(
      ([_, value]) =>
        value !== undefined &&
        value !== null &&
        value !== "" &&
        value.length !== 0
    )
    .map(([key, value]) => {
      // 배열인 경우
      if (Array.isArray(value)) {
        // etcKeyword 처리
        if (key === "etcKeyword") {
          const encodedValues = value
            .map((val) => encodeURIComponent(val))
            .join(",");
          return `keyword=${encodedValues}`;
        } else {
          // 다른 배열 처리
          const encodedValues = value
            .map((val) => encodeURIComponent(val))
            .join(",");
          return `${key}=${encodedValues}`;
        }
      }

      // 배열이 아닌 경우: 속도랑 가중치 현재 API 에러로 제외하고 호출
      // return `${key}=${encodeURIComponent(value)}`;
    })
    .join("&");

  const uri = query ? `/dictionary/identity?${query}` : "";

  return instance.get(uri).then((res) => res.data);
};

interface EgoOptions {
  sinner?: number[];
  season?: number[];
  grade?: string[];
  keyword?: string[];
  etcKeyword?: string[];
  resources?: string[];
  types?: string[];
  minWeight?: number;
  maxWeight?: number;
}

export const getEgo = (options: EgoOptions) => {
  // 옵션들을 쿼리 문자열로 변환
  const query = Object.entries(options)
    .filter(
      ([_, value]) =>
        value !== undefined &&
        value !== null &&
        value !== "" &&
        value.length !== 0
    )
    .map(([key, value]) => {
      // 배열인 경우
      if (Array.isArray(value)) {
        // etcKeyword 처리
        if (key === "etcKeyword") {
          const encodedValues = value
            .map((val) => encodeURIComponent(val))
            .join(",");
          return `keyword=${encodedValues}`;
        } else {
          // 다른 배열 처리
          const encodedValues = value
            .map((val) => encodeURIComponent(val))
            .join(",");
          return `${key}=${encodedValues}`;
        }
      }

      // 배열이 아닌 경우: 속도랑 가중치 현재 API 에러로 제외하고 호출
      // return `${key}=${encodeURIComponent(value)}`;
    })
    .join("&");

  const uri = query ? `/dictionary/ego?${query}` : "";

  return instance.get(uri).then((res) => res.data);
};
