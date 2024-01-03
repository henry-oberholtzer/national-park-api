import { parkData, thingsData } from "./stateCodes";

type StateCode = { [index: string]: string }

type ParkProps = {
    park: typeof parkData;
    index: number;
}

type parkArray = [typeof parkData];
type thingsArray = [typeof thingsData];
type ParkOptionsProps = {
    parkList: [typeof parkData]
    isLoaded: boolean
    parksByStateAPICall: (string) => void;
}
type SuccessAction = (parkList: []) => object;
type FailureAction = (error: string) => object;
type ThingProps = {
    thing: typeof thingsData
    index: number;
}