import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';
import { it, expect, describe } from 'vitest';

describe('get parks reducer actions', () => {
    it('getParksSuccess should create GET_PARKS_SUCCESS action', () => {
        const parkList = 'a park';
        expect(actions.getParksSuccess(parkList)).toEqual({
            type: c.GET_PARKS_SUCCESS,
            parkList
        });
    });
    it('getParksFailure should create GET_PARKS_FAILURE action', () => {
        const error = 'an error';
        expect(actions.getParksFailure(error)).toEqual({
            type: c.GET_PARKS_FAILURE,
            error 
        });
    });

});