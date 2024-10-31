// dashboardActions.js
import { RepositoryFactory } from "../../repository/RepositoryFactory";
var dashboardRepo = RepositoryFactory.get("dashboardRepo");


export const fetchFirstCardsData = () => async (dispatch) => {
    try {
      const response = await dashboardRepo.getFirstCardsData();
      dispatch({type: "FETCH_FIRST_CARDS_SUCCESS", payload: response.data});
    } catch (error) {
      console.log("First Cards Error: ", error.message);
      dispatch({type: "FETCH_FIRST_CARDS_FAILURE"})
    }
  };

export const fetchGraphData = () => async (dispatch) => {
    try {
      const response = await dashboardRepo.getGraphData();
      dispatch({type: "FETCH_GRAPH_FAILURE", payload: response.data});
    } catch (error) {
        console.log("Graph Error: ", error.message);
        dispatch({type: "FETCH_GRAPH_FAILURE"})
    }
  };
  
