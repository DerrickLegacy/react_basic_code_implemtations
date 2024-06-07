import React from 'react'

import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'

function Cat() {
    const { data: catData, isLoading, isError, refetch } = useQuery({
        queryKey: ["cat"],
        queryFn: async () => {
            return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
        },
    });
    if (isLoading) {
        return <h1>Loading....</h1>
    }
    if (isError) {
        return <h1>Sorry error while loa....</h1>
    }
    return (
        <div>
            <h1>{catData?.fact}</h1>
            <h4>
                <button onClick={refetch}>Update Data</button>
            </h4>
        </div>
    )
}

export default Cat