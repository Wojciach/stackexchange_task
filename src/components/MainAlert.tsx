import { Alert } from '@mui/material'

interface AlertProps {
    appErrorId?: string | null | undefined;
    appErrorMessage?: string | null | undefined;
}

export const MainAlert = ({
  appErrorId = null,
  appErrorMessage = null
}: AlertProps) => {
    if(appErrorId === null || appErrorMessage === undefined || appErrorMessage === "") return null;
  return (
    <Alert severity="error" variant='filled' sx={{ margin: 1 }}>
            Error ID: {appErrorId} <br />
            {appErrorMessage}
    </Alert>
  );
};
        
        

