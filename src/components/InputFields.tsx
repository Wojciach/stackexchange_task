import { Stack } from '@mui/material'
import { SortBy } from './SortBy';
import { SwitchOrder } from './SwitchOrder';
import { PageSizeInput } from './PageSizeInput';
import { PageNumber } from './PageNumber';
import { Divider } from '@mui/material';
import { Search } from './Search';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { UrlDataType } from '../types/types';
import { MyContext } from '../App';
import { useContext } from 'react'

export const InputFields = () => {

  const { urlData, fetchedData, loading } = useContext(MyContext);
  const { sort, page, order, pageSize, search }: UrlDataType = urlData;
  const { has_more }: { has_more: undefined | null | boolean } = fetchedData || {has_more: false};

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Stack direction={isSmallScreen ? 'column' : 'row'}  spacing={4} justifyContent="center" alignItems="center">
              <SortBy sort={sort} />
              <SwitchOrder order={order} />
              <PageSizeInput pageSize={pageSize} />
      </Stack>
      <Divider sx={{ margin: '20px 0' }}/>
      <Search search={search} loading={loading || false} />
      <Divider sx={{ margin: '20px 0' }}/>
      <PageNumber page={page} has_more={has_more || false} />
    </>
  )
}

export default InputFields
