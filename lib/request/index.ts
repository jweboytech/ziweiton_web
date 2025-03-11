import axios, { AxiosRequestConfig } from "axios";
import toast from "react-hot-toast";

const baseURL = `http://localhost:3600`;
// export const baseURL = "https://test-api.hostmix.ai/api";

const http = axios.create({
  baseURL: baseURL,
});
const getContentType = (type?: AxiosRequestConfig["method"]) => {
  switch (type) {
    case "POST":
    case "GET":
      return "application/json";
    default:
      return "application/json";
  }
};

// 发起请求的拦截中间件
http.interceptors.request.use(
  function (config) {
    if (config.headers) {
      // const userToken = localStorage.get("userToken");
      // // 指定 request header中的 Content-Type 值
      // config.headers["Content-Type"] = getContentType(config.method);
      // // 添加 Authorization 鉴权 header
      // if (userToken != null) {
      //   config.headers.Authorization = `Bearer ${userToken}`;
      // }
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应请求的拦截中间件
http.interceptors.response.use(
  function (response) {
    const { data } = response;

    if (data.code === 0) {
      return data.data;
    }

    toast.error(data.msg);
    return Promise.reject(data.msg);
  },
  function (error) {
    console.log(error);
    const { status, response } = error;
    const { message } = response.data;

    // 请求错误，一般是参数不正确引起
    if (status === 400) {
      toast.error(message);
      return Promise.reject(message);
    }

    // 无权限，一般是token无效、token过期引起
    if (status === 401) {
      toast.error("invalid token");
      return;
    }

    return Promise.reject(error);
  }
);

const request = (url: string, options: AxiosRequestConfig) => {
  return http({ ...options, url: baseURL + url });
};

export default request;
