import { useState } from 'react';
import axios from 'axios';
import { UrlDataType } from '../types/types';
import { urlCreator } from './urlCreator';

export function useFetch(urlData: UrlDataType) {

    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    const fetchData = async (urlData: UrlDataType) => {

        const urlString = urlCreator(urlData);
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(urlString);
            setData(response.data);
            return response.data;
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
        
    };

    return { data, loading, error, fetchData };
}