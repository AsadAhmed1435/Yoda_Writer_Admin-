import { RepositoryFactory } from "../../repository/RepositoryFactory";
import { toast } from "react-toastify";
var auth = RepositoryFactory.get("auth");
export const signup = (userDetail, onSuccess) => async (dispatch) => {
    await dispatch(loginLoading(true));
    try {
        const { data } = await auth.signup(userDetail);
        if (data.status_code == 200) {
            dispatch(loginLoading(false));
            toast.success("Signup successfully!");
            onSuccess();
        } else {
            toast.error(data.detail);
            dispatch(loginLoading(false));
        }
    } catch (error) {
        console.log("Sorry you missing or mismatch some fileds");
        dispatch(loginLoading(false));
    }
};
export const login = (userDetail) => async (dispatch) => {
    await dispatch(loginLoading(true));

    console.log("userDetail-->", userDetail);
    try {
        const { data } = await auth.login(userDetail);
        if (data.status_code == 200) {
            dispatch({ type: "LOGIN", payload: data.detail });
            dispatch(loginLoading(false));
        } else {
            toast.error(data.detail);
            dispatch(loginLoading(false));
        }
    } catch (error) {
        console.log("Sorry you missing or mismatch some fileds");
        dispatch(loginLoading(false));
    }
};
export const logout = () => async (dispatch) => {
    try {
        localStorage.clear();
        dispatch({ type: "LOGOUT" });
    } catch (error) {
        alert(error.message);
    }
};
export const loginLoading = (val) => async (dispatch) => {
    dispatch({ type: "loading", payload: val });
};
