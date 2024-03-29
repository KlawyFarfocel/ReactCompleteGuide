import { useEffect, useState } from "react";
export function useFetch(fetchFn,initialValue){
    const [fetchedData,setFetchedData]=useState(initialValue);
    const [isFetching,setIsFetching]=useState();
    const [error,setError]=useState();
    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const fetchedData = await fetchFn();
            setFetchedData(fetchedData);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch data.' });
          }
    
          setIsFetching(false);
        }
    
        fetchData();
      }, [fetchFn]);
      return{
        fetchedData,
        setFetchedData,
        isFetching,
        error
      }
}