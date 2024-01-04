import './css/Park.css'
import { ParkProps } from '../types'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Button, Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { latLng } from 'leaflet'

const Park = (props: ParkProps) => {
    const { park, index } = props
    const nav = useNavigate()
    const { stateCode } = useParams();
    const { latLong } = park;
    const coords = latLong.match(/(-?\d+\.\d+)\w+/g)
    const latitude = parseInt(coords[0])
    const longitude = parseInt(coords[1])
    const position = latLng(latitude, longitude)

    return (
        <Card variant="outlined" sx={{ maxWidth: 400, m: '1rem', height: 'auto' }} key={index}>
            {park.images.length !== 0 ?
                <CardMedia
                    sx={{ height: 140 }}
                    image={park.images[0].url}
                    title={park.images[0].altText}
                />
                : ''}
            <CardContent
                style={{ marginTop: 'auto' }}
                sx={{ height: 200 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {park.fullName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {park.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{ color: 'success.main' }} onClick={() => nav(`/state/${stateCode}/park/${park.parkCode}/thingstodo`)}>Things to do</Button>
                <Button size="small" sx={{ color: 'success.main' }} onClick={() => nav(`/state/${stateCode}/park/${park.parkCode}/campgrounds`)}>Find a campground</Button>
            </CardActions>
            
            <MapContainer
                center={position}
                zoom={11}
                scrollWheelZoom={false}
                style={{ height: '180px' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        Location. <br /> Go to here.
                    </Popup>
                </Marker>
            </MapContainer>
            
        </Card>
    )
}
export default Park;