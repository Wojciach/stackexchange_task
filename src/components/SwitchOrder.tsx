import { FormControl, FormLabel } from '@mui/material';
// import ToggleButton from '@mui/lab/ToggleButton';
// import ToggleButtonGroup from '@mui/lab/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState, useContext } from 'react';
import { MyContext } from '../App';
import { Order } from '../types/types';

interface SwitchOrderProps {
    order: Order;
}

export const SwitchOrder: React.FC<SwitchOrderProps> = ({order}) => {

    const {urlData, setUrlData} = useContext(MyContext);
    const handleChange = (event: React.MouseEvent<HTMLElement>, order: Order) => {
        if (order !== null) setUrlData({...urlData, order: order});
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Order</FormLabel>
            <ToggleButtonGroup
                value={order}
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