import { parkData, thingsData, campgroundData } from "./stateCodes";

type StateCode = { [index: string]: string }

type ParkProps = {
    park: typeof parkData;
    index: number;
}

type parkArray = [typeof parkData];
type thingsArray = [typeof thingsData];
type CampgroundData = typeof campgroundData;
type CampgroundDataArray = [CampgroundData];

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
type CampProps = {
    camp: CampgroundData,
    index: number,
}