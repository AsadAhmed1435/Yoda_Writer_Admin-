import Repository from "./Repository";
const SIGNUP = "/User/SignUp";
const LOGIN = "/User/LogIn";
export default {
    signup(userDetail) {
        return Repository.post(`${SIGNUP}`, userDetail);
    },
    login(userDetail) {
        console.log("rep user", userDetail);
        return Repository.post(`${LOGIN}`, userDetail);
    },
};
