import React, { useEffect, useState } from 'react'

// API Axios
import axios from './axios';

export default function Row({ title, fetchUrl }) {
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(
                request.data.results
            );
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    // fetchUrl in [] this bcz it is a dependency

    return (
        <div>
            <h2>{ title }</h2>
            {/* container */}
        </div>
    )
}
