import { Box, Typography, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import canyon from './../assets/images/canyon.jpg';

function Header() {
    return (
        <>
            <Box sx={{
                height: '15rem',
                backgroundImage: `url(${canyon})`,
                backgroundRepeat: "no-repeat",
                opacity: "20",
                backgroundSize: "cover",
                textAlign: 'center',
                color: 'black',
            }}>
                <Typography
                    variant="h2" sx={{ p: 4}}>
                            National Park Party
                            </Typography>
            <Typography variant="h6">Come curate your curiosity...</Typography>
        </Box >
            <Button size="small" variant="contained" color="secondary" endIcon={<SendIcon />} sx={{ textAlign: 'right' }}>my itinerary</Button>
        </>
    )
}
export default Header;