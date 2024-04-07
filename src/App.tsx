
import { MuiTable } from './components/MuiTable';
import { InputFields } from './components/InputFields';
import './App.css';
import {createContext, useEffect, useState} from 'react';
import { UrlDataType, AppErrorType, initialValues } from './types/types';
import { useFetch } from './hooks/useFetch';
import { MainAlert } from './components/MainAlert';
import { TableData } from './types/types';
import  mockData  from './mockData/mockData.json';

export const MyContext = createContext<{
  urlData: UrlDataType;
  setUrlData: React.Dispatch<React.SetStateAction<UrlDataType>>;
  fetchedData?: any;
  loading?: boolean;
}>({
  urlData: initialValues,
  setUrlData: () => {}
  }
);
 
export function App() {

  const [tableData, setTableData] = useState<TableData>(null);
  const [appError, setAppError] = useState<AppErrorType>(null);
  const [urlData, setUrlData] = useState<UrlDataType>(initialValues);
  const [fetchedData, setFetchedData] = useState<any>(null);
  //const [loading, setLoading] = useState<boolean>(false);
  const { data, error, loading, fetchData } = useFetch();

  useEffect(() => {
    fetchData(urlData);
  }, [urlData]);

  useEffect(() => {
    if(data) {
      console.log("dAAAAAAAAAAAAAAta");
      setFetchedData(data);
      setTableData(data.items);
    }
    if(error) {
      setAppError({
        id: error.response.data.error_id,
        message: error.response.data.error_message
      });
      // console.log(mockData);
      // setFetchedData(mockData);
      // setTableData(mockData.items);
    }
  }, [data, error]);


  return (
    <MyContext.Provider value={{urlData, setUrlData, fetchedData, loading}}>
      <div className="App" >
          <InputFields />
          <MainAlert appErrorId={appError?.id} appErrorMessage={appError?.message} />
          <MuiTable tableData={tableData} />
      </div>
    </MyContext.Provider>
  );
}

export default App;
