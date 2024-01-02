const getParksReducer = (state, action) => {
    switch (action.type) {
        default:
            throw new Error(`There is no action matching ${action.type}`);
    }
}
export default getParksReducer;