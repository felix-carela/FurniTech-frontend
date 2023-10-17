// import axios, { AxiosRequestConfig } from 'axios';

// const LOCALSTORAGE_KEY = process.env.REACT_APP_LOCALSTORAGE_KEY as string | null;

// const API_URL: string = process.env.REACT_APP_ENVIRONMENT === "development"
//   ? (process.env.REACT_APP_LOCAL_API_URL || '')
//   : (process.env.REACT_APP_DEPLOYED_API_URL || '');

// const api = axios.create({
//   baseURL: API_URL,
// });

// // Interceptors are axios functionality that allows you to intercept requests and responses
// // Here we're setting the token in local storage to the Authorization header
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem(LOCALSTORAGE_KEY!); // Using the non-null assertion operator
//     if (token) {
//       config.headers['Authorization'] = `token ${token}`;
//     }
//     return config;
//   }
// );



// export default api;

export default {};
