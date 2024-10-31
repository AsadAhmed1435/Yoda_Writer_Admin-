import Repository from "./Repository";
const FirstCardsEndpoint = "/Dashboard/Show-Stats";
const GraphEndpoint = "/Dashboard/Weekly-User-Registration";

export default {
   
        // Function for getting first cards data
        getFirstCardsData() {
            return Repository.get(`${FirstCardsEndpoint}`);
        },
    
        // Function for getting graph data
        getGraphData() {
            return Repository.get(`${GraphEndpoint}`);
        },
}


