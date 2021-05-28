let initialState = {
    days: [],
};
const APP_ADD_DAY = "APP_ADD_DAY";

const AppReduser = (state = initialState, action) => {
    switch (action.type) {
        case APP_ADD_DAY:
            return { ...state, days: [...state.days, action.data] };
        default:
            return state;
    }
};

export const addDay = (data) => ({
    type: "APP_ADD_DAY",
    data,
});

export default AppReduser;
