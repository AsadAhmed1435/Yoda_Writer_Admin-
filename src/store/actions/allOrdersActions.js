import { RepositoryFactory } from "../../repository/RepositoryFactory";
var allOrders = RepositoryFactory.get("allOrders");

export const fetchAllOrdersData = () => async (dispatch) => {
    try {
      const response = await allOrders.getAllOrdersData();
      dispatch({type: "FETCH_ALL_ORDERS_SUCCESS", payload: response.data});
    } catch (error) {
      console.log("All Orders Error: ", error.message);
      dispatch({type: "FETCH_ALL_ORDERS_FAILURE"})
    }
  };