const initialState = {
    allOrders: [],
    errorAllOrders: null,
  };
  
  const allOrdersReducer = (state = initialState, action) => {
    switch (action.type) {

      // First Cards reducers
      case "FETCH_ALL_ORDERS_SUCCESS":
        return { ...state, allOrders: action.payload};
      case "FETCH_ALL_ORDERS_FAILURE":
        return { ...state, errorAllOrders: action.payload };
        default:
      return state;
      
  }
};

export default allOrdersReducer;
