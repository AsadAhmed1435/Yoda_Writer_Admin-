import RepositoryCountry from "./RepositoryCountry";
const Countries = "/countries";
export default {
    getCountry() {
        return RepositoryCountry.get(`${Countries}`);
    },
};
