import {SET_FILTER} from "../actionTypes";
import {VISIBILITY_FILTERS} from "../../contstants";

const initialState = VISIBILITY_FILTERS.ALL;

 const visibilityFilter = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return state
        default:
            return state;
    }
}

export default visibilityFilter;