import getParksReducer from "../../reducers/get-parks-reducer";
import { describe, test, expect } from 'vitest';

describe('getParksReducer', () => {
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
});