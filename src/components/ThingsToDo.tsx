import Things from "./Things";
import { useLoaderData, useParams } from "react-router-dom";
import { thingsArray } from "../types";

function ThingsToDo() {
    const thingsToDo = useLoaderData() as thingsArray;
    return(
        <>
        {thingsToDo.length ? 
        <h2>Here are some things to do: </h2> : <h2>Sorry, there's nothing to do here</h2>
        }
       <div className="toDo">
            {thingsToDo.map((thing, index: number) =>
                <Things
                    key={index}
                    thing={thing}
                    index={index}
                />
            )}
        </div> 
        </>
    )
}
export default ThingsToDo;