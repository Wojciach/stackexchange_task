import { Stack } from '@mui/material'
import { SortBy } from './SortBy';
import { SwitchOrder } from './SwitchOrder';
import { PageSizeInput } from './PageSizeInput';
import { PageNumber } from './PageNumber';
import { Divider } from '@mui/material';
import { Search } from './Search';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const InputFields = () => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Stack direction={isSmallScreen ? 'column' : 'row'}  spacing={4} justifyContent="center" alignItems="center">
              <SortBy />
              <SwitchOrder />
              <PageSizeInput />
      </Stack>
      <Divider sx={{ margin: '20px 0' }}/>
      <Search />
      <Divider sx={{ margin: '20px 0' }}/>
      <PageNumber />
    </>
  )
}

export default InputFields
