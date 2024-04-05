import { Alert } from '@mui/material'

export const MainAlert = ( {appError}: any) => {
    if(appError === null || appError === undefined) return null;
  return (
    <Alert severity="error" variant='filled' sx={{ margin: 1 }}>
            Error ID: {appError.id} <br />
            {appError.message}
    </Alert>
  )
}
        
        

