import { Grid, Typography } from '@mui/material';

export default function Landing(params) {
    return (
        <section id='landing' style={{ padding: ' 5% ' , marginTop:'10px', marginBottom:'10px' }}>
            <Grid container>
                <Grid item md={6}>
                    <Typography variant='h5' fontWeight={500} fontFamily={'DM Sans'}>
                        You can make it possible. Because of you, more people who are 
                        living with vulnerability can receive the education, training 
                        and support they need when they need it-earlier in their journey, 
                        and again , as often as they need us. 
                    </Typography>
                    <Typography variant='h2' font-color={'#263238'} fontWeight={700} fontFamily={'DM Sans'} fontSize={'7vw'}>
                        Big Changes are caused By Small Help.
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <img
                        src="https://alfalahinstitute.org.uk/wp-content/uploads/2023/05/donate-sign-charity-campaign-scaled.jpg"
                        alt="Donation Campaign"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Grid>
                
            </Grid>
        </section>
    )
}