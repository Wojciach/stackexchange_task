import { FormControl, FormLabel } from '@mui/material';
// import ToggleButton from '@mui/lab/ToggleButton';
// import ToggleButtonGroup from '@mui/lab/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState, useContext } from 'react';
import { MyContext } from '../App';
import { Order } from '../types/types';

export function SwitchOrder() {
    const {urlData, setUrlData} = useContext(MyContext);
    const handleChange = (event: React.MouseEvent<HTMLElement>, newOrder: Order) => {
        if (newOrder !== null) setUrlData({...urlData, order: newOrder});
    };


    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Order</FormLabel>
            <ToggleButtonGroup
                value={urlData.order}
                exclusive
                onChange={handleChange}
                aria-label="order"
            >
                <ToggleButton value="desc" aria-label="desc">
                    Descending
                </ToggleButton>
                <ToggleButton value="asc" aria-label="asc">
                    Ascending
                </ToggleButton>
            </ToggleButtonGroup>
        </FormControl>
    );
}