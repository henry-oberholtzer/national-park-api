import { parkData, thingsData } from "./stateCodes";

type StateCode = { [index: string]: string }
type PickState = {
    parksByStateAPICall: (string) => void;
    setChosenState: (string) => void;
}
type ParkProps = {
    park: typeof parkData;
    index: number;
    handleThings: (string) => void;
}
type ParkOptionsProps = {
    parkList: [typeof parkData]
    chosenState: string;
    thingsToDoAPICall: (string) => void;
}
type SuccessAction = (parkList: []) => object;
type FailureAction = (error: string) => object;
type ThingsProps = {
    thingsToDo: [typeof thingsData];
}
type ThingProps = {
    thing: typeof thingsData
    index: number;
}