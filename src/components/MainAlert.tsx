import { Alert } from '@mui/material'

interface AlertProps {
    loading?: boolean | null | undefined;
    appErrorId?: number | null | undefined;
    appErrorMessage?: string | null | undefined;
}

export const MainAlert = ({
  loading = true,
  appErrorId = null,
  appErrorMessage = null
}: AlertProps) => {
    if(appErrorId === null || appErrorMessage === undefined || appErrorMessage === "" || loading === true) return null;
  return (
    <Alert severity="error" variant='filled' sx={{ margin: 1 }}>
            Error ID: {appErrorId} <br />
            {appErrorMessage}
    </Alert>
  );
};
        
        

