import axios from "axios";

const BASE_URL = "/api";

const emptyResponse = {
  data: {
    data: { records: [] },
    success: false,
    totalRecords: 0,
    message: "Network Error. Please try again",
    cached: true,
  },
};

/**
 * Common method to send the api requests.
 * This will take the authorization token from the localstorage
 * and append to the  request header.
 *
 * @param config AxiosRequestConfig object which is same as fetch parameters
 * @returns axios axios response data
 */
export function doRequest(config) {
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  axios.defaults.headers.common["Authorization"] = localStorage.getItem(
    "authToken"
  );
  return axios
    .request(config)
    .then((response) => response.data || {})
    .catch((error) => (error.response || emptyResponse).data);
}

export const httpGet = (url, params, config) =>
  doRequest({ params, url: BASE_URL + url, method: "GET", ...config });

export const httpPost = (url, data, config) =>
  doRequest({ data, url: BASE_URL + url, method: "POST", ...config });
