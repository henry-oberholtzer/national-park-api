import * as c from './ActionTypes';

export const getParksSuccess = (parkList) => ({
    type: c.GET_PARKS_SUCCESS,
    parkList
});

export const getParksFailure = (error) => ({
    type: c.GET_PARKS_FAILURE,
    error 
});
