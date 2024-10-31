// import { applyMiddleware, compose, createStore } from "redux";
// import rootReducer from "./reducers";
// import thunk from "redux-thunk";
// import CryptoJS from "crypto-js";

// const saveToLocalStorage = (state) => {
//   console.log(state.authUser);
//   const serializedUid = CryptoJS.AES.encrypt(
//     JSON.stringify(state.authUser),
//     "my-secret-key"
//   ).toString();
//   console.log(serializedUid);
//   localStorage.setItem("auth", serializedUid);
// };
// const checkLocalStorage = () => {
//   const serializedUid = localStorage.getItem("auth");
//   if (serializedUid === null) return undefined;
//   return {
//     authUser: JSON.parse(
//       CryptoJS.AES.decrypt(serializedUid, "my-secret-key").toString(
//         CryptoJS.enc.Utf8
//       )
//     ),
//   };
// };

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// let store = createStore(
//   rootReducer,
//   checkLocalStorage(),
//   composeEnhancers(applyMiddleware(thunk))
// );

// store.subscribe(() => saveToLocalStorage(store.getState()));
// export default store;
import { applyMiddleware, compose, createStore } from "redux";

// Import the dashboard actions
import { fetchFirstCardsData, fetchGraphData } from "./actions/dashboardActions";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import CryptoJS from "crypto-js";
import { fetchAllOrdersData } from "./actions/allOrdersActions";
let mode = "DEVELOPMENT";
const saveToLocalStorage = (state) => {
  let serializedUid = "";
  if (mode != "DEVELOPMENT") {
    serializedUid = CryptoJS.AES.encrypt(
      JSON.stringify(state.authUser),
      "my-secret-key"
    ).toString();
  } else {
    serializedUid = JSON.stringify(state.authUser);
  }
  localStorage.setItem("authUser", serializedUid);
};
const checkLocalStorage = () => {
  const serializedUid = localStorage.getItem("authUser");
  if (serializedUid === null) return undefined;
  let authUser = "";
  console.log("authUser", authUser);
  if (mode != "DEVELOPMENT") {
    authUser = JSON.parse(
      CryptoJS.AES.decrypt(serializedUid, "my-secret-key").toString(
        CryptoJS.enc.Utf8
      )
    );
  } else authUser = JSON.parse(serializedUid);
  return {
    authUser,
  };
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  rootReducer,
  checkLocalStorage(),
  composeEnhancers(applyMiddleware(thunk))
);
store.subscribe(() => saveToLocalStorage(store.getState()));

// Dispatch initial actions (e.g., fetching initial dashboard data)
store.dispatch(fetchFirstCardsData());
store.dispatch(fetchGraphData());
store.dispatch(fetchAllOrdersData());


export default store;







