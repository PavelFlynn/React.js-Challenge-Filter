import { Button } from '@mui/material'
import { getData } from '../api/services';
import { Item } from '../models/item.model';

export function CallData({ setState }) {
    const handleClick = async (e) => {
        e.preventDefault();

        const regEx = /key=(\w+),\sage=(\d+),/g;
        const data = await getData();
        const nextState = Array.from(data.matchAll(regEx))
        .map(foo => new Item(foo[1], foo[2]))
        .filter(v => v.age === 32)

        setState(nextState);
    };

    return (
        <div>
            <Button 
                variant='contained'
                onClick={handleClick}
                sx={{ display: 'block', padding: '8px 30px', margin: '0 auto', backgroundColor: '#1c1917', textTransform: 'capitalize', boxShadow: 'none' }}>
                Call
            </Button>
        </div>
    )
}

CallData.propTypes = {
    setState: Function,
}
