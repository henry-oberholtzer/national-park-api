export const apiCall = (stateCode: string) => {
        fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=${import.meta.env.VITE_NPS_API_KEY}`)
        .then(response => response.json())
        .then((jsonifiedResponse) => {
            console.log(jsonifiedResponse);
        })
        .catch((error) => {
            console.log(error)
        })
}
