// chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
// We are creating this Repository to use url and token everywhere
import axios from "axios";
const baseDomain = "http://192.168.18.106:10000/";
const baseURL = `${baseDomain}`;

// const getToken = () => {
//     //this is token used in header for security purpose
//     let ls = JSON.parse(localStorage.getItem("authUser"));
//     // console.log("ls__", ls);
//     console.log("ls", ls?.user.AccessToken);
//     if (ls && ls?.user.AccessToken != null) {
//         return ls?.user.AccessToken;
//     } else {
//         return "";
//     }
// };

let axiosObj;
axiosObj = axios.create({
    baseURL,
    headers: {
        // token: getToken(),
    },
});
export default axiosObj;
