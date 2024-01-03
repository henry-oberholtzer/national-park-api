import ParkOptions from "./ParkOptions";
import PickState from "./PickState";
import { parksAPIcall, thingsAPIcall } from "../nps-api-call";
import { useReducer, useState } from "react";
import getParksReducer, { initialState } from "../reducers/get-parks-reducer";
import ThingsToDo from "./ThingsToDo";

function FindPark() {
    const [state, dispatch] = useReducer(getParksReducer, initialState)
    const [chosenState, setChosenState] = useState<string>('');
    console.log(state)
    return (
        <>
            <PickState
                parksByStateAPICall={parksAPIcall(dispatch)}
                setChosenState={setChosenState}
            />
            <ParkOptions
                parkList={state.parkList}
                chosenState={chosenState}
                thingsToDoAPICall={thingsAPIcall(dispatch)}
            />
            <hr />
            <ThingsToDo 
                thingsToDo={state.thingsToDo}
            />
        </>
    )
}
export default FindPark;