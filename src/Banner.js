import React, { useEffect, useState } from 'react'

// API Call
import axios from "./axios"

export default function Banner({ fetchUrl }) {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]
            );
            return request;
        }
        fetchData();
    }, [fetchUrl])

    return (
        <header>
            
        </header>
    )
}
