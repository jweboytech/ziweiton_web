import request from ".";
import { serializateUrl } from "../utils";

/**
 * @name 用于swr的post请求
 * @param param {string | [string, object]} 请求参数，包含请求 URL 或请求 body
 * @param options {object} 请求 body
 * @returns
 */
export const postFetcher = <T>(
  param: string | [string, any],
  options?: any
) => {
  let url;
  let data;
  if (Array.isArray(param)) {
    url = param[0];
    if (param.length === 2) {
      data = param[1];
    }
  }
  if (typeof param === "string") {
    url = param;
    if (options?.arg) {
      data = options.arg;
    }
  }

  // console.log("[postFetcher] ", url, data);
  return request(url!, { method: "POST", data });
};

/**
 * @name 用于swr的get请求
 * @param url {string} 请求 URL
 * @param options {object} 请求 params，用于拼接在 URL 后面作为 query 参数
 * @returns
 */
export const getFetcher = <T>(param: string | [string, any], options?: any) => {
  if (Array.isArray(param)) {
    const [url, params] = param;
    return request(url, {
      method: "GET",
      params,
    });
  }

  let url = param;
  if (options?.arg) {
    url = serializateUrl(url, options!.arg);
  }

  return request(url, { method: "GET" });
};

export const putFetcher = <T = any>(url: string, options?: any) => {
  return request<T>(url, {
    method: "PUT",
    data: options?.arg,
  });
};

// export const deleteFetcher = <T>(
//   url: string,
//   options?: Record<string, any>
// ) => {
//   return _delete<{}, T>({ url, param: options?.arg });
// };
