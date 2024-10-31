const initialData = {
    countries: [],
};
const countryReducer = (state = initialData, action) => {
    switch (action.type) {
        case "COUNTRIES":
            return {
                ...state,
                countries: action.payload,
            };

        default:
            return state;
    }
};

export default countryReducer;
