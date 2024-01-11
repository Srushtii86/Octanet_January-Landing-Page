
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Form() {
    const [displayText, setDisplayText] = useState('');

    const handleButtonClick = () => {
        setDisplayText('Donation Process will proceed via link sent on your mail.Thank you');
    };
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {
                    m: 1, width: '50%', marginLeft: '20%',
                    marginRight: '20%'
                },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="standard-basic" label="Name" variant="outlined" fullWidth required />
            <TextField id="standard-basic" label="Email" variant="outlined" fullWidth required />
            <TextField id="standard-basic" label="Reference Number" variant="outlined" fullWidth required />
            <Button variant="contained" color="success" onClick={handleButtonClick}>
                Submit
            </Button>
            {displayText && <p>{displayText}</p>}
        </Box>
    )
}