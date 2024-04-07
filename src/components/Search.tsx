import { useState, useContext } from 'react';
import { MyContext } from '../App';
import { Button, Stack, TextField } from '@mui/material';

interface SearchProps {
    search: string;
    loading: boolean;
}

export const Search: React.FC<SearchProps> = ({search, loading} : SearchProps) => {

    const {setUrlData} = useContext(MyContext); 
    const [searchText, setSearchText] = useState('');
    const variant = loading ? 'outlined' : 'contained';

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
      };

    const handleClikc = () => {
        setUrlData(urlData => ({...urlData, search: searchText}));
    }

    return (
        <Stack direction='column' spacing={0.2}>
            <TextField onChange={handleChange} label={search} variant='outlined' sx={{ width: '100%' }}/>
            <Button onClick={handleClikc} variant={variant} sx={{ width: '100%' }}>
                {loading ? "Loading..." : "Search"}
            </Button>
        </Stack>
    );
}