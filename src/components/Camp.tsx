import './css/Park.css'
import { CampProps } from '../types'

const Camp = (props: CampProps) => {
    const { camp, index } = props
    const { name, images, amenities, campsites } = camp;
    return (
        <div className="park" key={index}>
            
            {images ?
            <img className="parkImage" width="100px" src={images[0].url} alt={images[0].altText} />
                : ''}
            <div>
                <div>
                <h3>{name}</h3>
                <button>Add to my itinerary</button>
            </div>
            {campsites ? 
                  <h4>Number sites: {campsites.totalSites}</h4> : ''
                }
                <p className="desc">{camp.description}</p>
                <h4>Amenities:</h4>
                <ul>
                {Object.keys(amenities).map((element, index) => (
                    <li key={index}>{element.charAt(0).toUpperCase() + element.slice(1).replace(/([a-z](?=[A-Z]))/g, '$1 ')} - {amenities[element]}</li>
                ))}
                </ul>
                
                {/* <p>{camp.latLong}</p>
                <p>{camp.latitude}</p>
                <p>{camp.longitude}</p> */}
            </div>
            
        </div>
    )
}
export default Camp;
//use lat/long if generates to link w/map?
//make button work