import { stateCodes } from "../stateCodes";
import { ParkOptionsProps } from "../types";
import Park from "./Park";
import './css/ParkOptions.css'

function ParkOptions(props: ParkOptionsProps) {
    const { parkList, chosenState } = props;
    return (
        <>
        {parkList.length ? 
        <h2>Here are the {parkList.length} parks in {stateCodes[chosenState]}</h2> : <></>
        }
        <div className="results">
            {parkList.map((park, index: number) =>
                <Park
                    key={index}
                    park={park}
                    index={index}
                    handleThings={props.thingsToDoAPICall}
                />
            )}
        </div>
        </>
    );
            
}
export default ParkOptions;