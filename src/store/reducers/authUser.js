const initialState = {
    user: null,
    uid: null,
};

const authUser = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
                uid: action.payload.UserId,
            };
        case "LOGOUT":
            localStorage.removeItem("auth");
            return {
                ...state,
                user: null,
                uid: null,
            };
        default:
            return state;
    }
};

export default authUser;
