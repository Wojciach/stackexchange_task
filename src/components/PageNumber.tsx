import React, { useContext } from 'react';
import { MyContext } from '../App';
import { Button, Stack, TextField } from '@mui/material';

interface PageNumberProps {
    page: number;
    has_more: boolean;
  }

export const PageNumber: React.FC<PageNumberProps> = ({page, has_more}) => {
    const {urlData, setUrlData } = useContext(MyContext);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newPageNumber = Number(event.target.value);
        if (newPageNumber < 1) newPageNumber = 1;
        setUrlData({...urlData, page: newPageNumber});
      };

    const handleNext = () => {
        if (page !== undefined) {
            setUrlData({...urlData, page: page + 1});
        }
    };

    const handlePrevious = () => {
        if (page !== undefined && page > 1) {
            setUrlData({...urlData, page: page - 1});
        }
    };


    return (
        <Stack direction='row' justifyContent="center">
            <Button
                onClick={handlePrevious}
                variant='outlined'
                sx={{ width: '100px' }}
                disabled={page === 1}
            >
                    Previous
            </Button>
            <TextField
                label='Page'
                variant='outlined'
                type='number'
                value={page}
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
                disabled={!has_more}
            >
                    Next
            </Button>
        </Stack>
    );
}