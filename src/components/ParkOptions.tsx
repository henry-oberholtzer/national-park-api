import { stateCodes } from "../stateCodes";
import { parkArray } from "../types";
import Park from "./Park";
import './css/ParkOptions.css'
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";

function ParkOptions() {
    const parkList = useLoaderData() as parkArray;
    const { stateCode } = useParams();
    return (
            <>
            <p>Found {parkList.length} {parkList.length > 1 ? "results" : "result"} {stateCode ? `for ${stateCodes[stateCode]}` : "for this query"}</p>
            <div className="results">
                {parkList.map((park, index: number) =>
                    <Park
                        key={index}
                        park={park}
                        index={index}
                    />
                )}
            </div> 
            </>
    )
            
}
export default ParkOptions;