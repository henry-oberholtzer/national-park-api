import { getParksSuccess, getParksFailure } from "./actions"

export const apiCall = (reducerActionSuccess: SuccessAction) => {
    return (reducerActionFailure: FailureAction) => {
        return (dispatchFunction: React.Dispatch<object>) => {
            return (stateCode: string) => {
                fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=${import.meta.env.VITE_NPS_API_KEY}`)
                .then(response => response.json())
                .then((jsonifiedResponse) => {
                    const action = reducerActionSuccess(jsonifiedResponse.data);
                    dispatchFunction(action);
                })
                .catch((error) => {
                    const action = reducerActionFailure(error);
                    dispatchFunction(action);
                })
            }
        }
    }
}
export const parksAPIcall = apiCall(getParksSuccess)(getParksFailure)