import { useState, useContext, useEffect } from 'react'
import {Stack, TextField, Button, ToggleButtonGroup, ToggleButton, SortDirection} from '@mui/material'
import { SortBy } from './SortBy';
import { SwitchOrder } from './SwitchOrder';
import { PageSizeInput } from './PageSizeInput';
import { Divider } from '@mui/material';
import {Sort, Order, Page, PageSize, UrlDataType} from '../types/types'; 
import {useFetch} from '../hooks/useFetch';
import { MyContext } from '../App';

export const InputFields = () => {
    const {urlData, setUrlData} = useContext(MyContext);

    const [sort, setSort] = useState<Sort>('popular');
    const [page, setPage] = useState(1)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPage(parseInt(e.target.value))
    }


    const [fetchedData, setFetchedData] = useState({});
    const [shouldFetch, setShouldFetch] = useState(false);

    const runUseFetch = useFetch(urlData);

    useEffect(() => {
      console.log("useEffect");
      console.log(urlData);
    }, [urlData]);


    const handleSearch = () => {
        console.log('search');
        console.log(urlData);
 
        setUrlData({...urlData, returnedData: "jabaniutki"});
        console.log(urlData);
      
        // let x = runUseFetch(urlData);
        // x.then((data) => {console.log(data.data)});
    }

  return (
    <>

    <Stack direction='row' spacing={4} justifyContent="center" alignItems="center">
            <SortBy />
            <SwitchOrder />
            <PageSizeInput />
    </Stack>

    <Divider sx={{ margin: '20px 0' }}/>

    <Stack direction='column'>
      <TextField label='Search' variant='outlined' sx={{ width: '100%' }}/>
      <Button variant='contained' sx={{ width: '100%' }} onClick={handleSearch}>Search</Button>
    </Stack>

    <Divider sx={{ margin: '20px 0' }}/>

    <Stack direction='row' justifyContent="center">
            <Button variant='outlined'>Previous</Button>
            <TextField label='Page' variant='outlined' type='number' value={page} onChange={handleChange} sx={{ width: '100px' }}/>
            <Button variant='outlined'>Next</Button>
    </Stack>
    
    </>
  )
}

export default InputFields
