import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// instance.interceptors.request.use((config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
//   const accessToken = getCookie('access-token');
//   if (accessToken) {
//     const newConfig = config;
//     newConfig.headers.Authorization = accessToken;

//     return newConfig;
//   }
//   return config;
// });

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);
