import './css/Park.css'
import { ParkProps } from '../types'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Park = (props: ParkProps) => {
    const { park, index } = props
    const nav = useNavigate()
    const { stateCode } = useParams();

    return (
        <div className="park" key={index}>
            {park.images.length !== 0 ?
            <img className="parkImage" width="100px" src={park.images[0].url} alt={park.images[0].altText} />
                : ''}
            <div>
                <div>
                <h3>{park.fullName}</h3>
                <button onClick={() => nav(`/state/${stateCode}/park/${park.parkCode}`)}>Things to do</button>
                <button onClick={() => nav(`${park.parkCode}/campgrounds`)}>Find a campground</button>
            </div>
                <p className="desc">{park.description}</p>
            </div>
            
        </div>
    )
}
export default Park;