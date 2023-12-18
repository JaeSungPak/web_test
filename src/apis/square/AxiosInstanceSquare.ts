import axios from "axios";
import axiosRetry from "axios-retry";
import {
  type AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

const serviceAxios = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  timeout: 15 * 1000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

axiosRetry(serviceAxios, {
  retries: 2,
  shouldResetTimeout: true,
  retryDelay: (retryCount) => {
    return retryCount * 10000;
  },
  retryCondition: (err) => {
    const { message } = err;
    return message.includes("timeout");
  },
});

serviceAxios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    console.log("Define request interceptor");
    return config;
  },
  (err: AxiosError) => {
    console.log("Define request interceptor error");
    return Promise.reject(err);
  }
);

serviceAxios.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log("Define response interceptor");
    return response;
  },
  (err: AxiosError) => {
    console.log("Define response interceptor error");
    return Promise.reject(err);
  }
);

function createRequest(service: AxiosInstance) {
  return function <T>(config: AxiosRequestConfig): Promise<T> {
    return service(config);
  };
}

export default createRequest(serviceAxios);
