
function ParkOptions(props) {
    //make each li item clickable.
    const { parkList } = props;
    return (
        <>
        {parkList.length ? 
        <h2>Here are the {parkList.length} parks in your chosen state</h2> : <></>
        }
        <ul>
            {parkList.map((park, index: number) =>
                <li key={index}>
                    <h3>{park.name}</h3>
                    <p>{park.description}</p>
                    {park.images.length !== 0 ?                     
                    <img width="100px" src={park.images[0].url} alt={park.images[0].altText}/>
                    : ''}
                </li>
            )}
        </ul>
        </>
    );
            
}
export default ParkOptions;