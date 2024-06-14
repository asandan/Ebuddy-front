import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  withCredentials: true,
});

const makeRequest = (instance: AxiosInstance) => (method: string, url: string, body: Object) => {
  // @ts-ignore
  return instance[method](url, body)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (method: string, url: string, body?: Object) =>
  // @ts-ignore
  (...params: unknown[]) => makeRequest(axiosInstance)(method, url, body, ...params);