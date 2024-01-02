function ZipForm() {
    return (
        <>
        <p>Please enter your zip code to find the National Park nearest you.</p>
        <form>
            <input type="text" placeholder="90210" />
            <button type="submit">Let's go!</button>
        </form>
        <hr />
        </>
    )
}
export default ZipForm;