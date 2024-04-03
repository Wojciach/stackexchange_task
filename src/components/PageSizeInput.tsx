import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import { PageSize } from '../types/types';
import { SelectChangeEvent } from '@mui/material/Select';
import { ReactNode } from 'react';



export function PageSizeInput() {
    const [pageSize, setPageSize] = useState<PageSize>(10);
    const handleChange = (event: SelectChangeEvent<number>, child: ReactNode) => {
        setPageSize(event.target.value as PageSize);
    };

    return (
        
        <FormControl sx={{width: '100px'}}>
            <InputLabel id="page-size-select-label">Page Size</InputLabel>
            <Select
                labelId="page-size-select-label"
                id="page-size-select"
                value={pageSize}
                onChange={handleChange}
            >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
            </Select>
        </FormControl>
    );
};