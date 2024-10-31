import Repository from "./Repository";
const ADD = "/Category/Add-Category?Name=";
export default {
    addCategoryRep(payload) {
        const form = new FormData();
        form.append("file", payload?.Image);
        return Repository.post(
            `${ADD}${payload.Name}&Status=${payload.Status}`,
            form
        );
    },
};
