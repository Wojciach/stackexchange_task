import { FormControl, FormLabel } from '@mui/material';
import ToggleButton from '@mui/lab/ToggleButton';
import ToggleButtonGroup from '@mui/lab/ToggleButtonGroup';
import { useState } from 'react';
import { Order } from '../types/types';

export function SwitchOrder() {
    
    const [order, setOrder] = useState<Order>('desc');

    const handleOrderChange = (event: React.MouseEvent<HTMLElement>, newOrder: Order) => {
        setOrder(newOrder);
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Order</FormLabel>
            <ToggleButtonGroup
                value={order}
                exclusive
                onChange={handleOrderChange}
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