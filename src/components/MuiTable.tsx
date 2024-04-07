import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from '@mui/material'
import { useContext } from 'react';
import { MyContext } from '../App';
import { TableData } from '../types/types';

interface MuiTableProps {
  tableData?: TableData | null;
}

export const MuiTable: React.FC<MuiTableProps> = ({ tableData }) => {

  const { urlData } = useContext(MyContext);
  const indexManipulator = (1 + ((urlData.page - 1)) * urlData.pageSize);

  if (tableData === undefined || tableData === null) return null
  return (

    <TableContainer component={Paper} sx={{ maxHeight: '300px'}}>
      <Table aria-label='table' stickyHeader>
        <TableHead>
            <TableRow>
                <TableCell>Index</TableCell>
                <TableCell>Tag Name</TableCell>
                <TableCell>Count</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {tableData.map((item: any, index: number) => (
                <TableRow key={index}>
                    <TableCell>{index + indexManipulator}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.count}</TableCell>
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}


