import { useState } from "react";
import { stateCodes } from "../stateCodes";


function PickState (props: PickState) {
    const [selectedState, setSelectedState] = useState<string>("AL")
    return (
        <>
        <p>Choose a state to find National Parks near you.</p>
        <form onSubmit={(e) => {
            e.preventDefault();
            props.parksByStateAPICall(selectedState)
            props.setChosenState(selectedState);

        }}>
            <select
                id="states"
                onChange={(e) => setSelectedState(e.currentTarget.value)}>
                {Object.keys(stateCodes).map(key => {
                    return (
                        <option value={key} key={key}>{stateCodes[key]}</option>
                    )
                })}
            </select>
            <button
                type="submit"
                >Let's go!</button>
        </form>
        <hr />
        </>
    )
}

export default PickState;