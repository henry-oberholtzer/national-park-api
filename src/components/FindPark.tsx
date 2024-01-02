import ParkOptions from "./ParkOptions";
import PickState from "./PickState";
import { apiCall } from "../nps-api-call";

function FindPark() {
    return (
        <>
        <p>this is the findpark control comp</p>
        <hr />
        <PickState 
            parksByStateAPICall={apiCall}/>
        <ParkOptions />
        <hr />
        <p>user choices generate here:</p>
        </>
    )
}
export default FindPark;