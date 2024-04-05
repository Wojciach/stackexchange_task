import { useState, useContext } from 'react';
import { MyContext } from '../App';
import { Button, Stack, TextField } from '@mui/material';

export function Search() {
    const {setUrlData, loading} = useContext(MyContext);; 
    const [searchText, setSearchText] = useState('');

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setUrlData({...urlData, search: event.target.value});
    //   };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
      };

    const handleClikc = () => {
        setUrlData(urlData => ({...urlData, search: searchText}));
    }

    return (
        <Stack direction='column' spacing={0.2}>
            <TextField onChange={handleChange} label='Search' variant='outlined' sx={{ width: '100%' }}/>
            <Button onClick={handleClikc} variant='contained' sx={{ width: '100%' }}>
                {loading ? "Loading..." : "Search"}
            </Button>
        </Stack>
    );
}