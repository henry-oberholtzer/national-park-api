type StateCode = { [index: string]: string }
type PickState = {
    parksByStateAPICall: (string) => void;
}
type SuccessAction = (parkList: []) => object;
type FailureAction = (error: string) => object;