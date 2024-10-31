import axios from "axios";
const baseDomain =
  "https://countriesnow.space/api/v0.1";
const baseURL = `${baseDomain}`;

let axiosObj;

axiosObj = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});
export default axiosObj;