// Root Reducer

import { combineReducers } from "redux";
import authUserReducer from "./authUser";
import userReducer from "./authReducer";
import countryReducer from "./countryReducer";
import dashboardReducer from "./dashboardReducer"; // Import the dashboard reducer

export let rootReducer = combineReducers({
    authUser: authUserReducer,
    country: countryReducer,
    user: userReducer,
    dashboard: dashboardReducer, // Include the dashboard reducer under the 'dashboard' key

});

export default rootReducer;
