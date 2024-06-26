import { FormControl, FormLabel } from '@mui/material';
// import ToggleButton from '@mui/lab/ToggleButton';
// import ToggleButtonGroup from '@mui/lab/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Sort } from '../types/types';
import { useContext } from 'react';
import { MyContext } from '../App';

interface SortByProps {
     sort: Sort;
};

export const SortBy: React.FC<SortByProps> = ({ sort }) => {
    const {urlData, setUrlData} = useContext(MyContext);

    const handleChange = (event: React.MouseEvent<HTMLElement>, newSort: Sort) => {
        if (newSort !== null) setUrlData({...urlData, sort: newSort});
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Sort By</FormLabel>
            <ToggleButtonGroup
                // value={urlData.sort}
                value={sort}
                exclusive
                onChange={handleChange}
                aria-label="sort"
            >
                <ToggleButton value="popular" aria-label="popular">
                    Popular
                </ToggleButton>
                <ToggleButton value="activity" aria-label="activity">
                    Activity
                </ToggleButton>
                <ToggleButton value="name" aria-label="name">
                    Name
                </ToggleButton>
            </ToggleButtonGroup>
        </FormControl>
    );
};