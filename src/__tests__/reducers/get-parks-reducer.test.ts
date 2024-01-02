import getParksReducer from "../../reducers/get-parks-reducer";
import { describe, test, expect } from 'vitest';
import * as c from './../../actions/ActionTypes';

describe('getParksReducer', () => {
    let action;

    const initialState = {
        isLoaded: false,
        parkList: [],
        error: null
    };
    test('should successfully throw a new error if non-matching action type is passed into it', () => {
        expect(
            () => {
                getParksReducer(initialState, {type: null})
            }
        ).toThrowError("There is no action matching null");
    });

    test('successfully getting park results should change isLoaded to true and update parkList', () => {
        const parkList = 'a park';
        action = {
            type: c.GET_PARKS_SUCCESS,
            parkList
        };
        expect(getParksReducer(initialState, action)).toEqual({
            isLoaded: true,
            parkList: 'a park',
            error: null
        });
    });

    test('fail to get parkList should change isLoaded to true and add an error message', () => {
        const error = 'an error';
        action = {
            type: c.GET_PARKS_FAILURE,
            error
        };
        expect(getParksReducer(initialState, action)).toEqual({
            isLoaded: true,
            parkList: [],
            error: 'an error'
        });
    });

});