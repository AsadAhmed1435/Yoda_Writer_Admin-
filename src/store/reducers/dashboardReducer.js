const initialState = {
  firstCardsData: [],
  graphData: [],
  errorFirstCards: null,
  errorGraph: null,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    // First Cards reducers
    case "FETCH_FIRST_CARDS_SUCCESS":
      return { ...state, firstCardsData: action.payload};
    case "FETCH_FIRST_CARDS_FAILURE":
      return { ...state, errorFirstCards: action.payload };

    // Graph reducers
    case 'FETCH_GRAPH_FAILURE':
      return { ...state, graphData: action.payload };
    case 'FETCH_GRAPH_FAILURE':
      return { ...state, errorGraph: action.payload };

    default:
      return state;
  }
};

export default dashboardReducer;
