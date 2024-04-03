import { FormControl, FormLabel } from '@mui/material';
import ToggleButton from '@mui/lab/ToggleButton';
import ToggleButtonGroup from '@mui/lab/ToggleButtonGroup';
import { Sort } from '../types/types';
import { useState, useContext } from 'react';
import { MyContext } from '../App';

export function SortBy() {
    const {urlData, setUrlData} = useContext(MyContext);

    const handleChange = (event: React.MouseEvent<HTMLElement>, newSort: Sort) => {
        setUrlData({...urlData, sort: newSort});
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Sort By</FormLabel>
            <ToggleButtonGroup
                value={urlData.sort}
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