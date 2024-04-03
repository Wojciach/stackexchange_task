import { FormControl, FormLabel } from '@mui/material';
import ToggleButton from '@mui/lab/ToggleButton';
import ToggleButtonGroup from '@mui/lab/ToggleButtonGroup';

type SortRadioGroupProps = {
    sort: 'popular' | 'activity' | 'name';
    onSortChange: (sort: 'popular' | 'activity' | 'name') => void;
};

export const SortRadioGroup: React.FC<SortRadioGroupProps> = ({ sort, onSortChange }) => {
    const handleChange = (event: React.MouseEvent<HTMLElement>, newSort: 'popular' | 'activity' | 'name') => {
        onSortChange(newSort);
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Sort By</FormLabel>
            <ToggleButtonGroup
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