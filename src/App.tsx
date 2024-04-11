
import { MuiTable } from './components/MuiTable';
import { InputFields } from './components/InputFields';
import './App.css';
import {createContext, useEffect, useState} from 'react';
import { UrlDataType, AppErrorType, initialValues } from './types/types';
import { useFetch } from './hooks/useFetch';
import { MainAlert } from './components/MainAlert';
import { TableData } from './types/types';
//import  mockData  from './mockData/mockData.json';

export const MyContext = createContext<{
  urlData: UrlDataType;
  setUrlData: React.Dispatch<React.SetStateAction<UrlDataType>>;
  fetchedData?: any;
  loading?: boolean;
}>({
  urlData: initialValues,
  setUrlData: () => {},
  loading: true
  }
);
 
export function App() {

  const [tableData, setTableData] = useState<TableData>(null);
  const [appError, setAppError] = useState<AppErrorType>(null);
  const [urlData, setUrlData] = useState<UrlDataType>(initialValues);
  const [fetchedData, setFetchedData] = useState<any>(null);
  //const [loading, setLoading] = useState<boolean>(false);
  var { data, error, loading, fetchData } = useFetch();

  useEffect(() => {
   fetchData(urlData);
  }, [urlData]);

  useEffect(() => {
    if(loading) {
    
    }
    else if(data && data.items) {
      setFetchedData(data);
      setTableData(data.items);
      setAppError(null);
    } else {
      setAppError({
        id:  0,
        message: "Data not found"
      });
    }

    if(error) {
      if (error.response && error.response.data) {
        // This is an Axios error with a response from the server
        setAppError({
          id: error.response.data.error_id || 0,
          message: error.response.data.error_message || "Unknown error"
        });
      } else {
        // This is not an Axios error, or it's an Axios error without a response from the server
        setAppError({
          id: 0,
          message: error.message || "Unknown error"
        });
      }
    }
  }, [data, error, loading]);


  return (
    <MyContext.Provider value={{urlData, setUrlData, fetchedData, loading}}>
      <div className="App" >
          <InputFields />
          <MainAlert appErrorId={appError?.id} appErrorMessage={appError?.message} loading={loading}/>
          <MuiTable tableData={tableData} />
      </div>
    </MyContext.Provider>
  );
}

export default App;
