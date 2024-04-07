import { FormControl, Select, MenuItem, FormLabel } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useContext } from 'react';
import { MyContext } from '../App';

interface PageSizeInputProps {
    pageSize: number;
}

export const PageSizeInput : React.FC<PageSizeInputProps> = ({pageSize}) => {

    const {urlData, setUrlData} = useContext(MyContext);
    const handleChange = (event: SelectChangeEvent<number>) => {
        setUrlData({ ...urlData, pageSize: event.target.value as number });
    };

    return (
        
        <FormControl sx={{width: '100px'}}>
            <FormLabel component="legend">Page Size</FormLabel>
            {/* <InputLabel id="page-size-select-label">Page Size</InputLabel> */}
            <Select
                labelId="page-size-select-label"
                id="page-size-select"
                value={pageSize}
                onChange={handleChange}
                sx={{ textAlign: 'center' }}
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