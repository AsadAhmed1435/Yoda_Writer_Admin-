import Repository from "./Repository";
let allOrdersEndPoint ='/Subscription/Get-All-Orders';

export default {
   
    // Function for getting first cards data
    getAllOrdersData() {
        return Repository.get(`${allOrdersEndPoint}`);
    },
}