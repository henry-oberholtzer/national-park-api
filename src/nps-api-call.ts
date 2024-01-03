import { getParksSuccess, getThingsSuccess, getParksFailure } from "./actions"
import { FailureAction } from "./types"

export const apiCall = (reducerActionSuccess) => {
    return (reducerActionFailure: FailureAction) => {
        return (apiCategory: string) => {
            return (queryParameter: string) => {
                return (dispatchFunction: React.Dispatch<object>) => {
                    return (query: string) => {
                        fetch(`https://developer.nps.gov/api/v1/${apiCategory}?${queryParameter}=${query}&api_key=${import.meta.env.VITE_NPS_API_KEY}`)
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
    }
}
export const parksAPIcall = apiCall(getParksSuccess)(getParksFailure)("parks")("stateCode");
export const thingsAPIcall = apiCall(getThingsSuccess)(getParksFailure)("thingstodo")("parkCode")