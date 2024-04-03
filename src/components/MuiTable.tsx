import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from '@mui/material'
import mockData from '../mockData/mockData.json'


export const MuiTable = () => {
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
            {TableData.items.map((item, index) => (
                <TableRow key={index}>
                    <TableCell>{index +1}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.count}</TableCell>
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const TableData = mockData;

