import { useLoaderData } from "react-router-dom";
import { campArray } from "../types";
import Camp from "./Camp";

function Campgrounds() {
    const availableCampground = useLoaderData() as campArray;
    return(
        <>
        {availableCampground.length ?
        <h2>List of campgrounds in XX park</h2> : <h2>Sorry, no campgrounds here.</h2>
        }
        <div className="toDo">
            {availableCampground.map((camp, index: number) =>
                <Camp
                    key={index}
                    camp={camp}
                    index={index}
                />
            )}
        </div> 
        </>
    )
}
export default Campgrounds;
//make campground list clickable to add to 'cart'-itinerary component