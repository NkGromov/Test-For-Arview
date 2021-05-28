let initialState = {
    days: [],
};
const APP_ADD_DAY = "APP_ADD_DAY";
const APP_ALL_NEW = "APP_ALL_NEW";

const AppReduser = (state = initialState, action) => {
    switch (action.type) {
        case APP_ADD_DAY:
            return { ...state, days: [...state.days, action.data] };
        case APP_ALL_NEW:
            return { ...state, days: action.data };
        default:
            return state;
    }
};

export const addDay = (data) => ({
    type: "APP_ADD_DAY",
    data,
});

export const allNewList = (data) => ({
    type: "APP_ALL_NEW",
    data,
});

export default AppReduser;
