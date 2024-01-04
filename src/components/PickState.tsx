import { useState } from "react";
import { stateCodes } from "../stateCodes";
import { useNavigate } from "react-router-dom";

function PickState () {
    const [selectedState, setSelectedState] = useState<string>("AL")
    const navigate = useNavigate();
    return (
        <>
        <p>Choose a state to find National Parks near you.</p>
        <form onSubmit={(e) => {
            e.preventDefault();
            navigate(`/state/${selectedState}`)
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