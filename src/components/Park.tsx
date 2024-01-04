import './css/Park.css'
import { ParkProps } from '../types'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Button, Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material'

const Park = (props: ParkProps) => {
    const { park, index } = props
    const nav = useNavigate()
    const { stateCode } = useParams();

    return (
        <Card variant="outlined" sx={{ maxWidth: 400, m: '1rem' }} key={index}>
            {park.images.length !== 0 ?
            <CardMedia 
                sx={{ height: 140 }}
                image={park.images[0].url} 
                title={park.images[0].altText} 
            />
                : ''}
            <CardContent>
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
        </Card>
    )
}
export default Park;