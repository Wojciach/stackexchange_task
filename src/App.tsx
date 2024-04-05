
import { MuiTable } from './components/MuiTable';
import { InputFields } from './components/InputFields';
import './App.css';
import {createContext, useEffect, useState} from 'react';
import { UrlDataType, AppErrorType, initialValues } from './types/types';
import { useFetch } from './hooks/useFetch';
import { MainAlert } from './components/MainAlert';

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

  const [tableData, setTableData] = useState<any>([]);
  const [appError, setAppError] = useState<AppErrorType>(null);
  const [urlData, setUrlData] = useState<UrlDataType>(initialValues);
  const [fetchedData, setFetchedData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const myFetch = useFetch(urlData);

  useEffect(() => {
      setLoading(true);
      myFetch.fetchData(urlData).then((data) => {
          console.log(data);
          setFetchedData(data);
          if(data.items) setTableData(data.items);
          if(data.error_message || data.error_message) {
            setAppError({id: data.error_id, message: data.error_message});
          }
          setLoading(false);
      })
      .catch(()=>{setAppError({id: 'None', message:'Something went wrong!'});})
  }, [urlData]);

  return (
    <MyContext.Provider value={{urlData, setUrlData, fetchedData, loading}}>
      <div className="App" >
          <InputFields />
          <MainAlert appError={appError} />
          <MuiTable tableData={tableData} />
      </div>
    </MyContext.Provider>
  );
}

export default App;
