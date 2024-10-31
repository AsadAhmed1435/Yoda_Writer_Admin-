import { RepositoryFactory } from "../../repository/RepositoryFactory";
var category = RepositoryFactory.get("category");

export const categoryLoading = (val) => async (dispatch) => {
    dispatch({ type: "loading", payload: val });
};
export const addCategoryAction = (payload, onSuccess) => async (dispatch) => {
    await dispatch(categoryLoading(true));
    try {
        const { data } = await category.addCategoryRep(payload);

        if (data.status_code == 200) {
            alert(data?.detail?.Message);
            onSuccess();
            await dispatch(categoryLoading(false));
        } else {
            alert(data?.detail);
            await dispatch(categoryLoading(false));
        }
    } catch (error) {
        alert(error.message);
        await dispatch(categoryLoading(false));
        console.log("", error);
    }
};
