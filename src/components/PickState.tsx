import { useState } from "react";

const stateCodes: StateCode = {
    AL: "Alabama",
    AK: "Alaska",
    AZ: "Arizona",
    AR: "Arkansas",
    CA: "California",
    CO: "Colorado",
    CT: "Connecticut",
    DE: "Delaware",
    DC: "District of Columbia",
    FL: "Florida",
    GA: "Georgia",
    HI: "Hawaii",
    ID: "Idaho",
    IL: "Illinois",
    IN: "Indiana",
    IA: "Iowa",
    KS: "Kansas",
    KY: "Kentucky",
    LA: "Louisiana",
    ME: "Maine",
    MD: "Maryland",
    MA: "Massachusetts",
    MI: "Michigan",
    MN: "Minnesota",
    MS: "Mississippi",
    MO: "Missouri",
    MT: "Montana",
    NE: "Nebraska",
    NV: "Nevada",
    NH: "New Hampshire",
    NJ: "New Jersey",
    NM: "New Mexico",
    NY: "New York",
    NC: "North Carolina",
    ND: "North Dakota",
    OH: "Ohio",
    OK: "Oklahoma",
    OR: "Oregon",
    PA: "Pennsylvania",
    PR: "Puerto Rico",
    RI: "Rhode Island",
    SC: "South Carolina",
    SD: "South Dakota",
    TN: "Tennessee",
    TX: "Texas",
    UT: "Utah",
    VT: "Vermont",
    VA: "Virginia",
    VI: "Virgin Islands",
    WA: "Washington",
    WV: "West Virginia",
    WI: "Wisconsin",
    WY: "Wyoming"
};

function PickState (props: PickState) {
    const [selectedState, setSelectedState] = useState<string>("AL")
    return (
        <>
        <p>Choose a state to find National Parks near you.</p>
        <form onSubmit={(e) => {
            e.preventDefault();
            props.parksByStateAPICall(selectedState)
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