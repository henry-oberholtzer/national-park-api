import ParkOptions from "./ParkOptions";
import PickState from "./PickState";
import { parksAPIcall } from "../nps-api-call";
import { useReducer } from "react";
import getParksReducer, { initialState } from "../reducers/get-parks-reducer";

function FindPark() {
    const [state, dispatch] = useReducer(getParksReducer, initialState)
    console.log(state)
    return (
        <>
        <p>this is the findpark control comp</p>
        <hr />
        <PickState 
            parksByStateAPICall={parksAPIcall(dispatch)}/>
        <ParkOptions 
           parkList={state.parkList}
            />
        <hr />
        <p>user choices generate here:</p>
        </>
    )
}
export default FindPark;