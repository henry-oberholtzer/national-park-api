import './css/Park.css'
import { ThingProps } from '../types'

const Things = (props: ThingProps) => {
    const { thing, index } = props

    return (
        <div className="park" key={index}>
            {thing.images.length !== 0 ?
            <img className="parkImage" width="100px" src={thing.images[0].url} alt={thing.images[0].altText} />
                : ''}
            <div>
                <div>
                <h3>{thing.title}</h3>
                <button>Add to my itinerary</button>
            </div>
                <p className="desc">{thing.shortDescription}</p>
            </div>
            
        </div>
    )
}
export default Things;