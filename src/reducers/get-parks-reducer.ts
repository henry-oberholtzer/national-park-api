import * as c from '../actions/ActionTypes';

const getParksReducer = (state, action) => {
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
        default:
            throw new Error(`There is no action matching ${action.type}`);
    }
}
export default getParksReducer;