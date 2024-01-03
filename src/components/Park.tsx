import './css/Park.css'
import { ParkProps } from '../types'

const Park = (props: ParkProps) => {
    const { park, index, handleThings } = props

    return (
        <div className="park" key={index}>
            {park.images.length !== 0 ?
            <img className="parkImage" width="100px" src={park.images[0].url} alt={park.images[0].altText} />
                : ''}
            <div>
                <div>
                <h3>{park.fullName}</h3>
                <button onClick={() => handleThings(park.parkCode)}>Things to do</button>
            <button>Find a campground</button>
            </div>
                <p className="desc">{park.description}</p>
            </div>
            
        </div>
    )
}
export default Park;