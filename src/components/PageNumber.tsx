import { useState, useContext } from 'react';
import { MyContext } from '../App';
import { Button, Stack, TextField } from '@mui/material';

export function PageNumber() {
    const {urlData, setUrlData, fetchedData} = useContext(MyContext);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newPageNumber = Number(event.target.value);
        if (newPageNumber < 1) newPageNumber = 1;
        setUrlData({...urlData, page: newPageNumber});
      };

    const handleNext = () => {
        if (urlData.page !== undefined) {
            setUrlData({...urlData, page: urlData.page + 1});
        }
    };

    const handlePrevious = () => {
        if (urlData.page !== undefined && urlData.page > 1) {
            setUrlData({...urlData, page: urlData.page - 1});
        }
    };


    return (
        <Stack direction='row' justifyContent="center">
            <Button
                onClick={handlePrevious}
                variant='outlined'
                sx={{ width: '100px' }}
                disabled={urlData.page === 1}
            >
                    Previous
            </Button>
            <TextField
                label='Page'
                variant='outlined'
                type='number'
                value={urlData.page}
                onChange={handleChange}
                sx={{ width: '100px' }}
                inputProps={{ 
                    min: 1, 
                    step: 1, 
                    style: { textAlign: 'center' }
                  }}
               
            />
            <Button
                onClick={handleNext}
                variant='outlined'
                sx={{ width: '100px' }}
                disabled={fetchedData && !fetchedData.has_more}
            >
                    Next
            </Button>
        </Stack>
    );
}