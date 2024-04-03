// import { useFetch } from './hooks/useFetch';
// import { UrlDataType } from './types/types';
import { MuiTable } from './components/MuiTable';
import { InputFields } from './components/InputFields';
import './App.css';
import {createContext, useState} from 'react';
import { UrlDataType } from './types/types';

export const MyContext = createContext<{
  urlData: UrlDataType;
  setUrlData: React.Dispatch<React.SetStateAction<UrlDataType>>;
}>({
  urlData: {
    page: 1,
    pagesize: 10,
    order: 'desc',
    sort: 'popular',
    search: ''
  },
  setUrlData: () => {}
  }
);
 
function App() {

  const [urlData, setUrlData] = useState<UrlDataType>({
    page: 1,
    pagesize: 10,
    order: 'desc',
    sort: 'popular',
    search: ''
  });

  //const data = mockData;

 // const { data } = useFetch(urlData as UrlDataType);
  //const [url, setUrl] = useFetch('');



 // console.log(data);

  return (
    <MyContext.Provider value={{urlData, setUrlData}}>
      <div className="App" >
          <InputFields />
          <MuiTable />
      </div>
    </MyContext.Provider>
  );
}

export default App;
