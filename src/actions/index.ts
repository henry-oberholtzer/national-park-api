import { parkData, thingsData } from '../stateCodes';
import * as c from './ActionTypes';

export const getParksSuccess = (parkList: [typeof parkData]) => ({
    type: c.GET_PARKS_SUCCESS,
    parkList
});

export const getThingsSuccess = (thingsToDo: [typeof thingsData]) => ({
    type: c.GET_THINGS_SUCCESS,
    thingsToDo
})

export const getParksFailure = (error: string) => ({
    type: c.GET_PARKS_FAILURE,
    error 
});
