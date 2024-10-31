import { RepositoryFactory } from "../../repository/RepositoryFactory";
var country = RepositoryFactory.get("country");
export const getCountries = () => async (dispatch) => {
  try {
    const { data } = await country.getCountry();
    console.log(data);
    if (data?.error == false) {
      const formattedData = data?.data?.map((country) => ({
        value: country.iso3,
        label: country.country,
      }));
      dispatch({ type: "COUNTRIES", payload: formattedData });
    }
  } catch (error) {
    console.log("", error);
  }
};
