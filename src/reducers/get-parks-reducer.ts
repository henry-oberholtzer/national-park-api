import * as c from '../actions/ActionTypes';

export const initialState = {
    isLoaded: false,
    parkList: [],
    thingsToDo: [],
    error: null,
}

const getParksReducer = (state: typeof initialState, action) => {
    switch (action.type) {
        case c.GET_PARKS_SUCCESS:
            return {
                ...state,
                isLoaded: true,
                parkList: action.parkList
            };
        case c.GET_PARKS_FAILURE:
            return {
                ...state,
                isLoaded: true,
                error: action.error
            };
        case c.GET_THINGS_SUCCESS:
            return {
                ...state,
                isLoaded: true,
                thingsToDo: action.thingsToDo
            }
        default:
            throw new Error(`There is no action matching ${action.type}`);
    }
}
export default getParksReducer;