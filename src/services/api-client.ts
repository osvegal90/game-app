import axios, { CanceledError } from "axios";

export { CanceledError };

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c82541fbb3104ac1a010531d33646718",
  },
});
