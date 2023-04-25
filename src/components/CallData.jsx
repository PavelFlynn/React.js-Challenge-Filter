import { Button } from '@mui/material'
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export default function CallData() {

    const { data, setData, errorMessage, setErrorMessage } = useContext(DataContext);

    return (
        <div>
            <Button 
                variant='contained'
                //onClick={getData}
                sx={{ display: 'block', padding: '8px 30px', margin: '0 auto', backgroundColor: '#1c1917', textTransform: 'capitalize', boxShadow: 'none' }}>
                Call
            </Button>
        </div>
    )
}
