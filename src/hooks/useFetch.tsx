import { useState } from 'react';
import axios from 'axios';
import { UrlDataType } from '../types/types';

export function useFetch(urlData: UrlDataType) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    const fetchData = async (urlData: UrlDataType) => {
        //const urlString = `https://api.stackexchange.com/2.3/tags?page=${urlData.page}pagesize=${urlData.pagesize}&order=${urlData.order}&sort=${urlData.sort}&site=stackoverflow`;
        const urlString = `https://api.stackexchange.com/2.3/tags?page=2&pagesize=100&order=desc&sort=popular&site=stackoverflow`;

        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(urlString);
            setData(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
        return { data, loading, error };
    };

    return  fetchData ;
}