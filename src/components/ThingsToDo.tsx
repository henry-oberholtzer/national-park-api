import { ThingsProps } from "../types";
import Things from "./Things";

function ThingsToDo(props: ThingsProps) {
    const { thingsToDo } = props;
    return(
        <>
        {thingsToDo.length ? 
        <h2>Here are things to do in *parkCode*</h2> : <h2>Sorry, there's nothing to do here</h2>
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